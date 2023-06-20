import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Course } from '../utils/public_api';
import { CoursesService } from './courses.service';

@Injectable()
export class CourseResolver implements Resolve<Course | undefined> {
    constructor(private coursesService: CoursesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course | undefined {
        const id = route.paramMap.get('id');
        if (id) {
            return this.coursesService.getCourseById(id)
        } else {
            return undefined;
        }
    }
}
