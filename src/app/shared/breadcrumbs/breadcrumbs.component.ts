import { Component, Input } from '@angular/core';
import { Course } from 'src/app/utils/global.models';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
   @Input() course: Course | undefined;
    
}