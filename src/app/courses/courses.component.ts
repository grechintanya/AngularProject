import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Course, DeleteButtonClickedEvent } from '../utils/public_api';
import { CoursesService, LoaderService } from '../services';
import { ConfirmationModalComponent } from './modal/modal.component';
import { debounce, filter, interval, tap } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private coursesService: CoursesService,
    private dialog: MatDialog, private loaderService: LoaderService) { }

  courseList: Course[] = [];
  searchQueryEmitter = this.coursesService.searchQuery;
  searchQuery!: string;

  onLoadMoreClick() {
    const start = this.courseList.length;
    this.coursesService.getCourseList(start, 3).subscribe(response => {
      this.courseList = this.courseList.concat(response);
    })
  }

  fetchCourses() {
    this.coursesService.getCourseList().pipe(
      tap(() => this.loaderService.hideLoader()),
    ).subscribe(response => {
      this.courseList = response;
    });
  }

  ngOnInit(): void {
    this.loaderService.showLoader();
    this.fetchCourses();
    this.searchQueryEmitter
      .pipe(filter(x => x.length >= 3 || x.length === 0), debounce(() => interval(300)))
      .subscribe(value => {
        this.searchQuery = value;
        this.coursesService.getCourseList(0, 10, value).subscribe(courses => this.courseList = courses);
      });
  }

  trackById(index: number, item: Course): string | number {
    return item.id
  }

  deleteCourse(courseID: number) {
    this.loaderService.showLoader();
    this.coursesService.removeCourse(courseID)
      .pipe(tap(() => this.loaderService.hideLoader()))
      .subscribe(() => this.fetchCourses());
  }

  onDeleteButtonClicked(event: DeleteButtonClickedEvent) {
    const modalWindow = this.dialog.open(ConfirmationModalComponent, { data: { title: event.title } });
    modalWindow.afterClosed().subscribe(data => {
      if (data) {
        this.deleteCourse(event.courseID);
      }
    });
  }
}
