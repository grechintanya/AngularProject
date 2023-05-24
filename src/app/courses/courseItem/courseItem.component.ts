import { Component } from '@angular/core';
import { Course } from 'src/app/utils/global.models';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  course: Course = {
    id: 1,
    title: 'VideoCourse 1',
    creationDate: '12/02/2022',
    duration: 220,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, amet!'
  }
}
