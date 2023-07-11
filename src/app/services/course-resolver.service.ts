import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap } from 'rxjs';
import { AppState } from '../store/appState.interface';
import { Course } from '../utils/public_api';
import { CoursesService } from './courses.service';
import { selectCourseById } from '../store/courses';

@Injectable()
export class CourseResolver implements Resolve<Course | undefined> {
    constructor(
        private coursesService: CoursesService,
        private store: Store<AppState>
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Course | undefined> {
        const id = route.paramMap.get('id');
        if (id) {
            const course$ = this.store.select(selectCourseById(Number(id)));
            return course$.pipe(
                switchMap((course) => {
                    if (course) return of(course);
                    else {
                        return this.coursesService.getCourseById(Number(id));
                    }
                })
            );
        }
        return of(undefined);
    }
}
