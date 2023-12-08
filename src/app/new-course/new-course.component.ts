import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/appState.interface';
import { Author, Course, DateToString, StringToDate } from '../utils/public_api';
import { coursesActions, selectError, selectIsLoading } from '../store/courses';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-new-course',
    templateUrl: './new-course.component.html',
    styleUrls: ['./new-course.component.css'],
})
export class NewCourseComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private store: Store<AppState>,
        private dateToString: DateToString,
        private stringToDate: StringToDate
    ) {}

    courseID!: string | null;
    course: Course | undefined;
    showCoursesLoader$!: Observable<boolean>;
    coursesError$!: Observable<string | null>;

    courseForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
        date: new FormControl('', Validators.required),
        length: new FormControl('', Validators.required),
        authors: new FormControl<Author[]>([]),
    });

    get name() {
        return this.courseForm.get('name');
    }
    get description() {
        return this.courseForm.get('description');
    }
    get date() {
        return this.courseForm.get('date');
    }
    get length() {
        return this.courseForm.get('length');
    }
    get authors() {
        return this.courseForm.get('authors');
    }

    ngOnInit() {
        this.showCoursesLoader$ = this.store.select(selectIsLoading);
        this.coursesError$ = this.store.select(selectError);
        this.courseID = this.route.snapshot.paramMap.get('id');
        this.store.dispatch(coursesActions.getAllAuthors());
        if (this.courseID) {
            this.course = this.route.snapshot.data['course'];
            if (this.course) {
                this.courseForm.setValue({
                    name: this.course.name,
                    description: this.course.description,
                    date: this.dateToString.transform(this.course.date),
                    length: String(this.course.length),
                    authors: this.course.authors,
                });
            }
        }
    }

    onCancelButtonClicked() {
        this.router.navigateByUrl('courses');
    }

    onSaveButtonClicked() {
        const newCourse = {
            id: Number(this.courseID),
            name: this.name?.value,
            description: this.description?.value,
            length: Number(this.length?.value),
            date: this.stringToDate.transform(this.date?.value),
            authors: this.authors?.value,
            isTopRated: false,
        };
        if (this.courseID) {
            this.store.dispatch(coursesActions.updateCourse({ course: newCourse as Course }));
        } else {
            this.store.dispatch(coursesActions.createCourse({ newCourse: newCourse as Course }));
        }
    }

    onCloseClicked() {
        this.store.dispatch(coursesActions.errorMessageClosed());
    }
}
