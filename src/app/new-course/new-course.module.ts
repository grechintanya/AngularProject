import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

import { NewCourseComponent } from './new-course.component';
import { DateComponent } from './date/date.component';
import { DurationComponent } from './duration/duration.component';
import { AuthorsComponent } from './authors/authors.component';
import { PipesModule } from '../shared/pipes.module';
import { DateToString, StringToDate } from '../utils/public_api';
import { BreadcrumbsModule, LoadingModule } from '../shared';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [NewCourseComponent, DateComponent, DurationComponent, AuthorsComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        PipesModule,
        BreadcrumbsModule,
        LoadingModule,
    ],
    exports: [NewCourseComponent],
    providers: [DateToString, StringToDate],
})
export class NewCourseModule {}
