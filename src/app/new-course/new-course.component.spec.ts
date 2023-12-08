import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { CoursesService, CourseResolver } from '../services';
import { NewCourseComponent } from './new-course.component';
import { NewCourseModule } from './new-course.module';
import { coursesActions, CoursesState } from '../store/courses';
import { Store } from '@ngrx/store';
import { Course } from '../utils/global.models';

describe('NewCourseComponent', () => {
    let component: NewCourseComponent;
    let fixture: ComponentFixture<NewCourseComponent>;
    let router: Router;
    let route: ActivatedRoute;
    const initialState: CoursesState = {
        courses: [],
        isLoading: false,
        error: null,
        searchQuery: '',
        allAuthors: [],
    };
    let store: Store;

    let course: Course;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('CoursesService', ['createCourse', 'updateCourse']);
        TestBed.configureTestingModule({
            declarations: [NewCourseComponent],
            imports: [NewCourseModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
            providers: [
                { provide: CoursesService, useValue: spy },
                CourseResolver,
                provideMockStore({ initialState }),
            ],
        });
        router = TestBed.inject(Router);
        fixture = TestBed.createComponent(NewCourseComponent);
        store = TestBed.inject(Store);
        spyOn(store, 'dispatch');
        route = TestBed.inject(ActivatedRoute);

        component = fixture.componentInstance;
        fixture.detectChanges();

        course = {
            id: 1,
            name: 'test name',
            description: 'description',
            length: 100,
            date: '20/12/2020',
            isTopRated: false,
            authors: [{ id: 1, name: 'author1' }],
        };
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('onCancelButtonClicked should call router with path "courses"', () => {
        const routerSpy = spyOn(router, 'navigateByUrl');
        component.onCancelButtonClicked();
        expect(routerSpy).toHaveBeenCalledOnceWith('courses');
    });

    it('ngOnInit method should dispatch GetAllAthours action', () => {
        const action = coursesActions.getAllAuthors();
        component.ngOnInit();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('ngOnInit method should set course properties to courseForm fields', () => {
        spyOn(route.snapshot.paramMap, 'get').and.returnValue('1');
        route.snapshot.data['course'] = course;
        component.ngOnInit();
        expect(component.name?.value).toBe('test name');
        expect(component.description?.value).toBe('description');
        expect(component.length?.value).toBe('100');
        expect(component.date?.value).toBe('20/12/2020');
        expect(component.authors?.value).toEqual([{ id: 1, name: 'author1' }]);
    });

    it(`onSaveButtonClicked method should dispatched updateCourse action with proper values, 
    if component has courseID property`, () => {
        component.courseID = '1';
        component.courseForm.setValue({
            name: course.name,
            description: course.description,
            length: String(course.length),
            date: course?.date,
            authors: course.authors,
        });
        course.date = '2020-12-20';
        const action = coursesActions.updateCourse({ course: course });
        component.onSaveButtonClicked();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it(`onSaveButtonClicked method should dispatched createCourse action with proper values, 
    if courseID is null`, () => {
        component.courseID = null;
        component.courseForm.setValue({
            name: course.name,
            description: course.description,
            length: String(course.length),
            date: course?.date,
            authors: course.authors,
        });
        course.id = 0;
        course.date = '2020-12-20';
        const action = coursesActions.createCourse({ newCourse: course });
        component.onSaveButtonClicked();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });
});
