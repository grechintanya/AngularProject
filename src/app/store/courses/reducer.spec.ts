import { coursesReducer } from "./reducer";
import * as coursesActions from './actions';
import { CoursesState } from "./coursesState.interface";
import { mockedCourses } from "src/app/utils/global.constants";
import { Course } from "src/app/utils/global.models";
import { isNgTemplate } from "@angular/compiler";

describe('Courses Reducer', () => {

    let initialState: CoursesState;
    let courseList: Course[];

    beforeEach(() => {

        courseList = [
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

        initialState = {
            courses: courseList,
            isLoading: false,
            error: null,
            searchQuery: ''
        }
    })

    it('should change "IsLoading" to true after getCourses action', () => {
        const action = coursesActions.getCourses();
        const state = coursesReducer(initialState, action);
        expect(state.isLoading).toBe(true);
    });

    it('should change "IsLoading" to true after deleteCourse action', () => {
        const action = coursesActions.deleteCourse({ id: 1 });
        const state = coursesReducer(initialState, action);
        expect(state.isLoading).toBe(true);
    });

    it('should change "IsLoading" to true after createCourse action', () => {
        const action = coursesActions.createCourse({ newCourse: courseList[1] });
        const state = coursesReducer(initialState, action);
        expect(state.isLoading).toBe(true);
    });

    it('should change "IsLoading" to true after updateCourse action', () => {
        const action = coursesActions.updateCourse({ id: 2, course: courseList[1] });
        const state = coursesReducer(initialState, action);
        expect(state.isLoading).toBe(true);
    });

    it('should change error to error message after getCoursesFailure action', () => {
        const action = coursesActions.getCoursesFailure({ error: 'test error' });
        const state = coursesReducer(initialState, action);
        expect(state.error).toBe('test error');
    });

    it('should change error to error message after deleteFailure action', () => {
        const action = coursesActions.deleteCourseFailure({ error: 'test error' });
        const state = coursesReducer(initialState, action);
        expect(state.error).toBe('test error');
    });

    it('should change error to error message after createCourseFailure action', () => {
        const action = coursesActions.createCourseFailure({ error: 'test error' });
        const state = coursesReducer(initialState, action);
        expect(state.error).toBe('test error');
    });

    it('should change error to error message after updateCourseFailure action', () => {
        const action = coursesActions.updateCourseFailure({ error: 'test error' });
        const state = coursesReducer(initialState, action);
        expect(state.error).toBe('test error');
    });


    it('should replace courses with new courses array after getCoursesSuccess action', () => {
        const action = coursesActions.getCoursesSuccess({ courses: mockedCourses });
        const state = coursesReducer(initialState, action);
        expect(state.isLoading).toBe(false);
        expect(state.courses).toEqual(mockedCourses);
    });

    it('should change "searchQuery" to string value after searchQueryEntered action', () => {
        const action = coursesActions.searchQueryEntered({ searchQuery: 'test' });
        const state = coursesReducer(initialState, action);
        expect(state.searchQuery).toBe('test');
    });

    it('should add courses to courses array after loadMoreSuccess action', () => {
        const action = coursesActions.loadMoreSuccess({ courses: mockedCourses });
        const state = coursesReducer(initialState, action);
        expect(state.courses.length).toBe(6);
    });

    it('the course should be removed from courses array after deleteCourseSuccess action', () => {
        const action = coursesActions.deleteCourseSuccess({ id: 1 });
        const state = coursesReducer(initialState, action);
        expect(state.courses.length).toBe(2);
        expect(state.courses.find(item => item.id === 1)).toBeUndefined();
    });

    it('the course should be added to courses array after createCourseSuccess action', () => {
        const newCourse = {
            id: 4, name: 'VideoCourse 4', date: '2023-07-23',
            length: 100, description: 'Course 4 description', isTopRated: false, authors: []
        };
        const action = coursesActions.createCourseSuccess({ newCourse: newCourse });
        const state = coursesReducer(initialState, action);
        expect(state.courses.length).toBe(4);
        expect(state.courses.find(item => item.id === 4)).toEqual(newCourse);
    });
    
    it('the updated course should be replaced with new course after updateCourseSuccess action', () => {
        const newCourse = {
            id: 1, name: 'Updated course', date: '2023-07-23',
            length: 100, description: 'Course 4 description', isTopRated: false, authors: []
        };
        const action = coursesActions.updateCourseSuccess({ course: newCourse });
        const state = coursesReducer(initialState, action);
        expect(state.courses.length).toBe(3);
        expect(state.courses.find(item => item.id === 1)?.name).toBe('Updated course');
    });

})
