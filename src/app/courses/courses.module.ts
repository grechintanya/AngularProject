import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './courseItem/course-item.component';
import { CoursesHeaderComponent } from './coursesHeader/courses-header.component';
import { setBorderDirective } from '../utils/public_api';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesHeaderComponent,
    CourseItemComponent,
    setBorderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    CoursesComponent
  ],
  providers: [],
})
export class CoursesModule { }