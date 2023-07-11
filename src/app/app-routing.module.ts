import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuardService, CourseResolver } from './services';

const routes: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'courses', component: CoursesComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: 'courses/new', component: NewCourseComponent, canActivate: [AuthGuardService] },
    {
        path: 'courses/:id',
        component: NewCourseComponent,
        resolve: { course: CourseResolver },
        canActivate: [AuthGuardService],
    },
    { path: '**', component: NotfoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
