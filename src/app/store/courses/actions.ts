import { createAction, props } from '@ngrx/store';
import { Author, Course } from 'src/app/utils/global.models';

export const getCourses = createAction('[Courses] Get courses');
export const getCoursesSuccess = createAction(
    '[Courses] Get courses success',
    props<{ courses: Course[] }>()
);
export const getCoursesFailure = createAction(
    '[Courses] Get courses failure',
    props<{ error: string }>()
);

export const searchQueryEntered = createAction(
    '[Courses] Search query entered',
    props<{ searchQuery: string }>()
);

export const loadMoreClicked = createAction(
    '[Courses] Load more btn clicked',
    props<{ start: number; searchQuery: string }>()
);
export const loadMoreSuccess = createAction(
    '[Courses] Load more success',
    props<{ courses: Course[] }>()
);

export const deleteCourse = createAction('[Courses] Delete course', props<{ id: number }>());
export const deleteCourseSuccess = createAction(
    '[Courses] Delete course success',
    props<{ id: number }>()
);
export const deleteCourseFailure = createAction(
    '[Courses] Delete course failure',
    props<{ error: string }>()
);

export const createCourse = createAction('[Courses] Create course', props<{ newCourse: Course }>());
export const createCourseSuccess = createAction(
    '[Courses] Create course success',
    props<{ newCourse: Course }>()
);
export const createCourseFailure = createAction(
    '[Courses] Create course failure',
    props<{ error: string }>()
);

export const updateCourse = createAction('[Courses] Update course', props<{ course: Course }>());
export const updateCourseSuccess = createAction(
    '[Courses] Update course success',
    props<{ course: Course }>()
);
export const updateCourseFailure = createAction(
    '[Courses] Update course failure',
    props<{ error: string }>()
);

export const getAllAuthors = createAction('[Courses] Get all authors');

export const getAllAuthorsSuccess = createAction(
    '[Courses] Get all authors success',
    props<{ authors: Author[] }>()
);
export const getAllAuthorsFailure = createAction(
    '[Courses] Get all authors failure',
    props<{ error: string }>()
);

export const errorMessageClosed = createAction('[Auth] Error message closed');
