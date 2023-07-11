import { createSelector } from '@ngrx/store';
import { AppState } from '../appState.interface';

export const selectCourses = (state: AppState) => state.courses;

export const selectCoursesList = createSelector(selectCourses, (state) => state.courses);
export const selectIsLoading = createSelector(selectCourses, (state) => state.isLoading);
export const selectError = createSelector(selectCourses, (state) => state.error);
export const selectCoursesListLength = createSelector(
    selectCourses,
    (state) => state.courses.length
);
export const selectSearchQuery = createSelector(selectCourses, (state) => state.searchQuery);
export const selectCourseById = (id: number) =>
    createSelector(selectCourses, (state) => state.courses.find((item) => item.id === id));
export const selectAllAuthors = createSelector(selectCourses, (state) => state.allAuthors);
