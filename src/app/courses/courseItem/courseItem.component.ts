import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() duration = 0;
  @Input() creationDate = '';
  @Input() courseId: string|number = '';

  @Output()
  deleteButtonClicked: EventEmitter<string|number> = new EventEmitter<string|number>();

  onDeleteButtonClicked() {
    this.deleteButtonClicked.emit(this.courseId)
  }
}
