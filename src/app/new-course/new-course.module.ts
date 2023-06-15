import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

import { NewCourseComponent } from './new-course.component';
import { DateComponent } from './date/date.component';
import { DurationComponent } from './duration/duration.component';
import {AuthorsComponent} from './authors/authors.component';
import { PipesModule } from '../shared/pipes.module';

@NgModule({
    declarations: [
        NewCourseComponent,
        DateComponent,
        DurationComponent,
        AuthorsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MatButtonModule,
        PipesModule
    ],
    exports: [
        NewCourseComponent
    ],
    providers: []
})
export class NewCourseModule { }