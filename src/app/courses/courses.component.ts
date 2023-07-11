import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Course, DeleteButtonClickedEvent } from '../utils/public_api';
import { CoursesService } from '../services';
import { ConfirmationModalComponent } from './modal/modal.component';
import { debounceTime, filter, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/appState.interface';
import {
    selectCoursesList,
    coursesActions,
    selectCoursesListLength,
    selectSearchQuery,
    selectIsLoading,
    selectError,
} from '../store/courses';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
    constructor(
        private coursesService: CoursesService,
        private dialog: MatDialog,
        private store: Store<AppState>
    ) {}

    showCoursesLoader$!: Observable<boolean>;
    coursesError$!: Observable<string | null>;
    coursesList$!: Observable<Course[]>;
    start$!: Observable<number>;
    start!: number;
    searchQuery$!: Observable<string>;
    searchQuery!: string;

    onLoadMoreClick() {
        this.store.dispatch(
            coursesActions.loadMoreClicked({ start: this.start, searchQuery: this.searchQuery })
        );
    }

    ngOnInit(): void {
        this.coursesList$ = this.store.select(selectCoursesList);
        this.start$ = this.store.select(selectCoursesListLength);
        this.searchQuery$ = this.store.select(selectSearchQuery);
        this.showCoursesLoader$ = this.store.select(selectIsLoading);
        this.coursesError$ = this.store.select(selectError);

        this.store.dispatch(coursesActions.getCourses());
        this.start$.subscribe((value) => (this.start = value));
        this.searchQuery$.subscribe((value) => (this.searchQuery = value));

        this.coursesService.searchQuery
            .pipe(
                filter((x) => x.length >= 3 || x.length === 0),
                debounceTime(300)
            )
            .subscribe((value) =>
                this.store.dispatch(coursesActions.searchQueryEntered({ searchQuery: value }))
            );
    }

    trackById(index: number, item: Course): string | number {
        return item.id;
    }

    deleteCourse(courseID: number) {
        this.store.dispatch(coursesActions.deleteCourse({ id: courseID }));
    }

    onDeleteButtonClicked(event: DeleteButtonClickedEvent) {
        const modalWindow = this.dialog.open(ConfirmationModalComponent, {
            data: { title: event.title },
        });
        modalWindow.afterClosed().subscribe((data) => {
            if (data) {
                this.deleteCourse(event.courseID);
            }
        });
    }

    onCloseClicked() {
        this.store.dispatch(coursesActions.errorMessageClosed());
    }
}
