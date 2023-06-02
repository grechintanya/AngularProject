import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/utils/global.models';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  @Input() course!: Course;

  @Output()
  deleteButtonClicked: EventEmitter<string | number> = new EventEmitter<string | number>();

  onDeleteButtonClicked() {
    this.deleteButtonClicked.emit(this.course?.id)
  }
}
