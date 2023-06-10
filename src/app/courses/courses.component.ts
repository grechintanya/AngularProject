import { Component, OnInit } from '@angular/core';
import { mockedCourses, Course } from '../utils/public_api';
import { FilterPipe } from '../utils/public_api';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseList: Course[] = [];

  filteredCourseList: Course[] = [];
  
  constructor(private filterPipe: FilterPipe) {
  }

onLoadMoreClick() {
    console.log('load more...')
  }

  ngOnInit(): void {
    this.courseList = mockedCourses;
    this.filteredCourseList = [...this.courseList];  
  }

  trackById(index: number, item: Course): string | number {
    return item.id
  }

  onDeleteButtonClicked(data: string | number) {
    console.log(data)
  }

  onSearchButtonClicked(searchText: string) {
     this.filteredCourseList = this.filterPipe.transform(this.courseList, searchText)
  }
}
