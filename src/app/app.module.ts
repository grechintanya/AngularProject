import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { LoginModule } from './login/login.module';
import { NewCourseModule } from './new-course/new-course.module';
import { HeaderComponent, FooterComponent, LoadingComponent } from './shared';
import { FilterPipe, IfAuthenticatedDirective } from './utils/public_api';
import { AuthService, AuthGuardService, CourseResolver, AuthInterceptor, LoaderService, CoursesService } from './services';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IfAuthenticatedDirective,
    FilterPipe,
    NotfoundComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    CoursesModule,
    LoginModule,
    NewCourseModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    CourseResolver,
    LoaderService,
    CoursesService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
