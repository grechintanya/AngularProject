import { Component, ViewChild } from '@angular/core';
import { DateComponent } from './date/date.component';
import { DurationComponent } from './duration/duration.component';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {

  title!: string;
  description!: string;

  @ViewChild(DateComponent) date!: DateComponent;
  @ViewChild(DurationComponent) duration!: DurationComponent;

  onCancelButtonClicked() {
    console.log('Cancel')
  }

  onSaveButtonClicked() {
    console.log(`title: ${this.title}\ndescription: ${this.description}
    date: ${this.date.creationDate}\nduration: ${this.duration.duration}`);
  }
}
