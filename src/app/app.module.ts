import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { LoginModule } from './login/login.module';
import { NewCourseModule } from './new-course/new-course.module';
import { HeaderComponent, FooterComponent } from './shared';
import { FilterPipe, IfAuthenticatedDirective } from './utils/public_api';
import { AuthService, AuthGuardService, CourseResolver, AuthInterceptor, LoaderService, CoursesService } from './services';
import { NotfoundComponent } from './notfound/notfound.component';
import { authReducer, AuthEffects } from './store/auth';
import { coursesReducer, CoursesEffects } from './store/courses';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IfAuthenticatedDirective,
    FilterPipe,
    NotfoundComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    CoursesModule,
    LoginModule,
    NewCourseModule,
    HttpClientModule,
    StoreModule.forRoot({auth: authReducer, courses: coursesReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AuthEffects, CoursesEffects]),
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
