import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-header',
  templateUrl: './courses-header.component.html',
  styleUrls: ['./courses-header.component.css'],
})
export class CoursesHeaderComponent {
  
  searchValue = '';

  changeSearchValue(EventData: Event) {
    this.searchValue = (<HTMLInputElement>EventData.target).value;
  }

  onSearchButtonClicked(input: HTMLInputElement) {
    console.log(input.value);
    this.searchValue = '';
  }
}
