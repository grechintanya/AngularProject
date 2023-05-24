import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './courseItem/courseItem.component';
import { CoursesHeaderComponent } from './coursesHeader/coursesHeader.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesHeaderComponent,
    CourseItemComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CoursesComponent
  ],
  providers: [],
})
export class CoursesModule { }