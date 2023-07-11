import { createReducer, on } from '@ngrx/store';
import { CoursesState } from './coursesState.interface';
import * as coursesActions from './actions';

export const initialCoursesState: CoursesState = {
    courses: [],
    isLoading: false,
    error: null,
    searchQuery: '',
    allAuthors: [],
};

export const coursesReducer = createReducer(
    initialCoursesState,
    on(coursesActions.getCourses, (state): CoursesState => ({ ...state, isLoading: true })),
    on(
        coursesActions.getCoursesSuccess,
        (state, { courses }): CoursesState => ({ ...state, isLoading: false, courses, error: null })
    ),
    on(
        coursesActions.getCoursesFailure,
        (state, { error }): CoursesState => ({ ...state, isLoading: false, error })
    ),
    on(
        coursesActions.searchQueryEntered,
        (state, { searchQuery }): CoursesState => ({ ...state, searchQuery })
    ),
    on(
        coursesActions.loadMoreSuccess,
        (state, { courses }): CoursesState => ({
            ...state,
            isLoading: false,
            courses: [...state.courses, ...courses],
            error: null,
        })
    ),
    on(coursesActions.deleteCourse, (state): CoursesState => ({ ...state, isLoading: true })),
    on(
        coursesActions.deleteCourseSuccess,
        (state, { id }): CoursesState => ({
            ...state,
            isLoading: false,
            courses: [...state.courses.filter((item) => item.id !== id)],
        })
    ),
    on(
        coursesActions.deleteCourseFailure,
        (state, { error }): CoursesState => ({ ...state, isLoading: false, error })
    ),
    on(coursesActions.createCourse, (state): CoursesState => ({ ...state, isLoading: true })),
    on(
        coursesActions.createCourseSuccess,
        (state, { newCourse }): CoursesState => ({
            ...state,
            isLoading: false,
            error: null,
            courses: [...state.courses, newCourse],
        })
    ),
    on(
        coursesActions.createCourseFailure,
        (state, { error }): CoursesState => ({ ...state, isLoading: false, error })
    ),
    on(coursesActions.updateCourse, (state): CoursesState => ({ ...state, isLoading: true })),
    on(
        coursesActions.updateCourseSuccess,
        (state, { course }): CoursesState => ({
            ...state,
            isLoading: false,
            error: null,
            courses: [
                ...state.courses.map((item) => {
                    if (item.id === course.id) return course;
                    else return item;
                }),
            ],
        })
    ),
    on(
        coursesActions.updateCourseFailure,
        (state, { error }): CoursesState => ({ ...state, isLoading: false, error })
    ),
    on(coursesActions.getAllAuthors, (state): CoursesState => ({ ...state, isLoading: true })),
    on(coursesActions.getAllAuthorsSuccess, (state, { authors }) => ({
        ...state,
        allAuthors: authors,
        error: null,
        isLoading: false,
    })),
    on(coursesActions.getAllAuthorsFailure, (state, { error }) => ({
        ...state,
        error,
        isLoading: false,
    })),
    on(coursesActions.errorMessageClosed, (state): CoursesState => ({ ...state, error: null }))
);
