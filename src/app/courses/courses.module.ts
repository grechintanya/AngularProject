import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './courseItem/course-item.component';
import { CoursesHeaderComponent } from './coursesHeader/courses-header.component';
import { ConfirmationModalComponent } from './modal/modal.component';
import { BreadcrumbsModule, LoadingModule } from '../shared';
import { setBorderDirective, FilterPipe, OrderByPipe } from '../utils/public_api';
import { PipesModule } from '../shared/pipes.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesHeaderComponent,
    CourseItemComponent,
    setBorderDirective,
    OrderByPipe,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    PipesModule,
    AppRoutingModule,
    BreadcrumbsModule,
    LoadingModule
  ],
  exports: [
    CoursesComponent
  ],
  providers: [
    FilterPipe
  ],

})
export class CoursesModule { }