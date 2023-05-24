import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { LoginComponent } from './login/login.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { HeaderComponent, FooterComponent, BreadcrumbsComponent } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewCourseComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
