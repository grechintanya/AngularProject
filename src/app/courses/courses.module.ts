import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
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