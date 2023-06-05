import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-header',
  templateUrl: './courses-header.component.html',
  styleUrls: ['./courses-header.component.css'],
})
export class CoursesHeaderComponent {
  
  searchValue = 'qwerty';

  onSearchButtonClicked(input: string) {
    console.log(input);
    this.searchValue = '';
  }
}
