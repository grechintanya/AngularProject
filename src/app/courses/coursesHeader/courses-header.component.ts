import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services';


@Component({
  selector: 'app-courses-header',
  templateUrl: './courses-header.component.html',
  styleUrls: ['./courses-header.component.css'],
})
export class CoursesHeaderComponent {
  

  constructor(private coursesService: CoursesService) {}

  onKeyUp(event: any) {
   this.coursesService.searchQuery.next(event.target.value);
  }

}
