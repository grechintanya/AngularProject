import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, delay, Observable, of, Subject, tap } from "rxjs";
import { Course, baseURL } from "../utils/public_api";
import { LoaderService } from "./loader.service";


@Injectable({ providedIn: "root" })
export class CoursesService {

    constructor(private http: HttpClient, private loaderService: LoaderService) { }

    courseList: Course[] = [];

    searchQuery = new Subject<string>();


    private handleError<T>(operation: string, result?: T) {
        return (error: any): Observable<T> => {
            alert(`${operation}: ${error.message}`);
            return of(result as T);
        }
    }

    getCourseList(start = 0, count = 10, text = ''): Observable<Course[]> {
        return this.http.get<Course[]>(`${baseURL}/courses?sort=date&start=${start}&count=${count}&textFragment=${text}`)
            .pipe(catchError(this.handleError<Course[]>('GetCourseList', [])))
    }

    createCourse(newCourse: Course): Observable<Course> {
        return this.http.post<Course>(`${baseURL}/courses`, newCourse)
            .pipe(catchError(this.handleError<Course>('CreateCourse')))
    }

    getCourseById(courseID: number): Observable<Course> {
        return this.http.get<Course>(`${baseURL}/courses/${courseID}`)
            .pipe(catchError(this.handleError<Course>(`Get course by id ${courseID}`)))
    }

    updateCourse(courseID: number, newCourse: Course) {
        return this.http.patch<Course>(`${baseURL}/courses/${courseID}`, newCourse)
            .pipe(catchError(this.handleError<Course>(`Update course with id ${courseID}`)))
    }

    removeCourse(courseID: number): Observable<any> {
        return this.http.delete<any>(`${baseURL}/courses/${courseID}`)
            .pipe(catchError(this.handleError<any>('RemoveCourse')))
    }

    searchCourses(text: string): Observable<Course[]> {
        return this.http.get<Course[]>(`${baseURL}/courses?textFragment=${text}`)
            .pipe(catchError(this.handleError<Course[]>('SearchCourses')))
    }
}
