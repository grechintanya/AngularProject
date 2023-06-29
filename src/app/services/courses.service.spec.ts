import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Course, baseURL } from '../utils/public_api';
import { AuthService } from './authentication.service';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
    let coursesService: CoursesService;
    let httpController: HttpTestingController;
    let authService: AuthService;

    const courseList = [
        {
            id: 1, name: 'VideoCourse 1', date: '2022-12-03',
            length: 220, description: 'Course 1 description', isTopRated: true, authors: []
        },
        {
            id: 2, name: 'videoCourse 2', date: '2023-06-10', length: 150,
            description: 'Course 2 description', isTopRated: false, authors: []
        },
        {
            id: 3, name: 'VideoCourse 3', date: '2023-05-30',
            length: 120, description: 'Course 3 description', isTopRated: false, authors: []
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CoursesService, AuthService],
            imports: [HttpClientTestingModule]
        });

        authService = TestBed.inject(AuthService);
        httpController = TestBed.inject(HttpTestingController);

        authService.user = {
            id: 2,
            token: 'test token',
            name: { first: 'test', last: 'test' },
            login: 'login',
            password: '123'
        };

        coursesService = TestBed.inject(CoursesService);

    });

    it('getCourseList method should call HTTPClient get method and return a list of courses', () => {
        coursesService.getCourseList().subscribe(courses => {
            expect(courses).toEqual(courseList);
        });

        const req = httpController.expectOne(`${baseURL}/courses?sort=date&start=0&count=10`);
        expect(req.request.method).toBe('GET');
        req.flush(courseList);

    });

    it('createCourse method should call HTTPClient methos POST with new course', () => {
        const newCourse: Course = {
            id: 4,
            name: 'test',
            description: 'course description',
            length: 10,
            date: '2023-06-12',
            isTopRated: true,
            authors: []
        };
        coursesService.createCourse(newCourse).subscribe(course => {
            expect(course).toEqual(newCourse);
        });
        const req = httpController.expectOne(`${baseURL}/courses`);
        expect(req.request.method).toBe('POST');
        req.flush(newCourse);
    });

    it('removeCourse method should  call HTTP DELETE method and add course id to URL', () => {
        coursesService.removeCourse(1).subscribe();
        const req = httpController.expectOne(`${baseURL}/courses/1`);
        expect(req.request.method).toBe('DELETE');
    });

    it('searchCourses method should  call HTTP GET method and add a text fragment to URL', () => {
        coursesService.searchCourses('videoCourse').subscribe(courses => {
            expect(courses.length).toBe(3);
            expect(courses[0].name).toBe('VideoCourse 1');
        })
        const req = httpController.expectOne(`${baseURL}/courses?textFragment=videoCourse`);
        expect(req.request.method).toBe('GET');
        req.flush(courseList);
    });

    it('getCourseById method should call HTTP GET method, add course id to URL and return a course', () => {
        coursesService.getCourseById(1).subscribe(course => {
            expect(course.name).toBe('VideoCourse 1');
        });
        const req = httpController.expectOne(`${baseURL}/courses/1`);
        expect(req.request.method).toBe('GET');
        req.flush(courseList[0]);
    });

    it('updateCourse method should call HTTP PATCH method, add course id to URL and return updated course', () => {
        const newCourse: Course = {
            id: 1,
            name: 'test',
            description: 'course description',
            length: 10,
            date: '2023-06-12',
            isTopRated: true,
            authors: []
        };  
        coursesService.updateCourse(1, newCourse).subscribe(course => {
            expect(course.name).toBe('test')
        });
        const req = httpController.expectOne(`${baseURL}/courses/1`);
        expect(req.request.method).toBe('PATCH');
        req.flush(newCourse);
    })
})