import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course, DeleteButtonClickedEvent } from 'src/app/utils/public_api';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  @Input() course!: Course;

  @Output()
  deleteButtonClicked: EventEmitter<DeleteButtonClickedEvent> = 
  new EventEmitter<DeleteButtonClickedEvent>();

  onDeleteButtonClicked() {
    this.deleteButtonClicked.emit({courseID: this.course.id, title: this.course?.title})
  }
}
