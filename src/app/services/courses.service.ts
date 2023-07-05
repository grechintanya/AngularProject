import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, Subject } from "rxjs";
import { Course, baseURL } from "../utils/public_api";
import { Router } from "@angular/router";


@Injectable({ providedIn: "root" })
export class CoursesService {

    constructor(private http: HttpClient, private router: Router) { }

    searchQuery = new Subject<string>();

    getCourseList(start = 0, count = 10, text = ''): Observable<Course[]> {
        return this.http.get<Course[]>(`${baseURL}/courses?sort=date&start=${start}&count=${count}&textFragment=${text}`)
    }

    createCourse(newCourse: Course): Observable<Course> {
        return this.http.post<Course>(`${baseURL}/courses`, newCourse)
    }

    getCourseById(courseID: number): Observable<Course> {
        return this.http.get<Course>(`${baseURL}/courses/${courseID}`)
            .pipe(catchError(() => {
                this.router.navigateByUrl('/notfound');
                return of({} as Course);
            }))
    }

    updateCourse(courseID: number, newCourse: Course) {
        return this.http.patch<Course>(`${baseURL}/courses/${courseID}`, newCourse)
    }

    removeCourse(courseID: number): Observable<any> {
        return this.http.delete<any>(`${baseURL}/courses/${courseID}`)
    }

}
