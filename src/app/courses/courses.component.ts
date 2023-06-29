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

  constructor(private coursesService: CoursesService,
    private dialog: MatDialog) {  }
  
  onLoadMoreClick() {
    const start = this.courseList.length;
    this.coursesService.getCourseList(start, 3).subscribe(response => {
      this.courseList = this.courseList.concat(response);
    })
  }

  fetchCourses() {
    this.coursesService.getCourseList().subscribe(response => {
      this.courseList = response;
    }); 
  }

  ngOnInit(): void {
     this.fetchCourses();
  }

  trackById(index: number, item: Course): string | number {
    return item.id
  }

  deleteCourse(courseID: number) {
    this.coursesService.removeCourse(courseID)
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

  onSearchButtonClicked(searchText: string) {
    this.coursesService.searchCourses(searchText).subscribe(response => this.courseList = response);
  }
}
