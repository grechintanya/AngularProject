import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";

import { CoursesService } from "src/app/services";
import * as coursesActions from './actions';

@Injectable()
export class CoursesEffects {

    constructor(private actions$: Actions, private coursesService: CoursesService,
        private router: Router) { }

    coursesList$ = createEffect(() => {
        return this.actions$.pipe(ofType(coursesActions.getCourses),
            mergeMap(() => {
                return this.coursesService.getCourseList().pipe(
                    map(courses => coursesActions.getCoursesSuccess({ courses: courses })),
                    catchError(error => of(coursesActions.getCoursesFailure({ error: error.message })))
                )
            }))
    })

    searchQuery$ = createEffect(() => {
        return this.actions$.pipe(ofType(coursesActions.searchQueryEntered),
            mergeMap(action => {
                return this.coursesService.getCourseList(0, 10, action.searchQuery).pipe(
                    map(courses => coursesActions.getCoursesSuccess({ courses: courses })),
                    catchError(error => of(coursesActions.getCoursesFailure({ error: error.message })))
                )
            })
        )
    })

    loadMoreClick$ = createEffect(() => {
        return this.actions$.pipe(ofType(coursesActions.loadMoreClicked),
            mergeMap((action) => {
                return this.coursesService.getCourseList(action.start, 3, action.searchQuery).pipe(
                    map(courses => coursesActions.loadMoreSuccess({ courses: courses })),
                    catchError(error => of(coursesActions.getCoursesFailure({ error: error.message })))
                )
            })
        )
    })

    deleteCourse$ = createEffect(() => {
        return this.actions$.pipe(ofType(coursesActions.deleteCourse),
            mergeMap((action) => {
                return this.coursesService.removeCourse(action.id).pipe(
                    map(() => coursesActions.deleteCourseSuccess({ id: action.id })),
                    catchError(error => of(coursesActions.deleteCourseFailure({ error: error.message })))
                )
            })
        )
    })

    createCourse$ = createEffect(() => {
        return this.actions$.pipe(ofType(coursesActions.createCourse),
            mergeMap((action) => {
                return this.coursesService.createCourse(action.newCourse).pipe(
                    map((course) => {
                        this.router.navigateByUrl('courses');
                        return coursesActions.createCourseSuccess({ newCourse: course })

                    }),
                    catchError(error => of(coursesActions.createCourseFailure({ error: error.message })))
                )
            })
        )
    })

    updateCourse$ = createEffect(() => {
        return this.actions$.pipe(ofType(coursesActions.updateCourse),
            mergeMap((action) => {
                return this.coursesService.updateCourse(action.id, action.course).pipe(
                    map((course) => {
                        this.router.navigateByUrl('courses');
                        return coursesActions.updateCourseSuccess({ course: course })
                    }),
                    catchError(error => of(coursesActions.updateCourseFailure({ error: error.message })))
                )
            })
        )
    })
}