import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { LoginModule } from './login/login.module';
import { NewCourseModule } from './new-course/new-course.module';
import { HeaderComponent, FooterComponent, BreadcrumbsComponent } from './shared';
import { FilterPipe, IfAuthenticatedDirective } from './utils/public_api';
import { AuthService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    IfAuthenticatedDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    CoursesModule,
    LoginModule,
    NewCourseModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
