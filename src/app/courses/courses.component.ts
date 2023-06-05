import { Component, OnInit } from '@angular/core';
import { mockedCourses, Course } from '../utils/public_api';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseList: Course[] = [];
  noCoursesMessage = 'No data. Feel free to add a new course'

  onLoadMoreClick() {
    console.log('load more...')
  }

  ngOnInit(): void {
    this.courseList = mockedCourses;
  }

  trackById(index: number, item: Course): string | number {
    return item.id
  }

  onDeleteButtonClicked(data: string | number) {
    console.log(data)
  }
}
