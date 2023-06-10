import { Course, CourseFields, mockedCourses } from '../utils/public_api';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
    let coursesService: CoursesService;

    beforeEach(() => {
        coursesService = new CoursesService();
        coursesService.courseList = [
            {
                id: 1, title: 'VideoCourse 1', creationDate: new Date('2022-12-03'),
                duration: 220, description: 'Course 1 description', topRated: true
            },
            {
                id: 2, title: 'videoCourse 2', creationDate: new Date('2023-06-10'),
                duration: 150, description: 'Course 2 description', topRated: false
            },
            {
                id: 3, title: 'VideoCourse 3', creationDate: new Date('2023-05-30'),
                duration: 120, description: 'Course 3 description', topRated: false
            }
        ];
    });

    it('getCourseList method should return an array of 3 items', () => {
        const coursesArray = coursesService.getCourseList();
        expect(coursesArray.length).toBe(3);
    });

    it('createCourse method should push a new item in courseList', () => {
        const newCourse: Course = {
            id: 4,
            title: 'test',
            description: 'course description',
            duration: 10,
            creationDate: new Date(),
            topRated: true
        };
        coursesService.createCourse(newCourse);
        const coursesArray = coursesService.getCourseList();
        expect(coursesArray.length).toBe(4);
        expect(coursesArray).toContain(newCourse);
    });

    it('getCourseById method with argument 1 should return a course with title "VideoCourse 1"', () => {
        const item = coursesService.getCourseById(1);
        expect(item?.title).toBe('VideoCourse 1');
    });

    it('updateCourse should overwrite an item with updated fields', () => {
        const fields: CourseFields = {
            title: 'Test',
            duration: 100
        };
        coursesService.updateCourse(1, fields);
        const updatedItem = coursesService.getCourseById(1);
        expect(updatedItem?.title).toBe('Test');
        expect(updatedItem?.duration).toBe(100);
    });
})