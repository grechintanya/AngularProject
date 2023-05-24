import { Component } from '@angular/core';
import { mockedCourses, Course } from '../utils/public_api';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courseList: Course[] = mockedCourses;
  
}
