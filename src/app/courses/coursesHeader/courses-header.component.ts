import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-courses-header',
  templateUrl: './courses-header.component.html',
  styleUrls: ['./courses-header.component.css'],
})
export class CoursesHeaderComponent {
  
  searchValue = '';

  @Output()
  searchButtonClicked: EventEmitter<string> = new EventEmitter<string>();

  onSearchButtonClicked() {
    this.searchButtonClicked.emit(this.searchValue);
    this.searchValue = '';
  }
}
