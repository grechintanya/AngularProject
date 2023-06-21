import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Course, DeleteButtonClickedEvent, FilterPipe } from '../utils/public_api';
import { CoursesService } from '../services';
import { ConfirmationModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseList: Course[] = [];

  filteredCourseList: Course[] = [];

  constructor(private filterPipe: FilterPipe,
    private coursesService: CoursesService,
    private dialog: MatDialog) {  }

onLoadMoreClick() {
    console.log('load more...')
  }

  ngOnInit(): void {
    this.courseList = this.coursesService.getCourseList();
    this.filteredCourseList = this.filterPipe.transform(this.courseList, '');
  }

  trackById(index: number, item: Course): string | number {
    return item.id
  }

  deleteCourse(courseID: number|string) {
    this.coursesService.removeCourse(courseID);
    this.courseList = this.coursesService.getCourseList();
    this.filteredCourseList = this.filterPipe.transform(this.courseList, '');
  }

  onDeleteButtonClicked(event: DeleteButtonClickedEvent) {
    const modalWindow = this.dialog.open(ConfirmationModalComponent, { data: { title: event.title } });
    modalWindow.afterClosed().subscribe(data => {
      if (data) { 
        this.deleteCourse(event.courseID);
      }
    });
  }

  onSearchButtonClicked(searchText: string) {
    this.filteredCourseList = this.filterPipe.transform(this.courseList, searchText)
  }
}
