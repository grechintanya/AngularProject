import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { CoursesService, CourseResolver } from '../services';
import { NewCourseComponent } from './new-course.component';
import { NewCourseModule } from './new-course.module';

describe('NewCourseComponent', () => {
  let component: NewCourseComponent;
  let fixture: ComponentFixture<NewCourseComponent>;
  let coursesService: jasmine.SpyObj<CoursesService>;
  let router: Router;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CoursesService', ['createCourse', 'updateCourse']);
    TestBed.configureTestingModule({
      declarations: [NewCourseComponent],
      imports: [NewCourseModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [{provide: CoursesService, useValue: spy}, CourseResolver]
    });
    coursesService = TestBed.inject(CoursesService) as jasmine.SpyObj<CoursesService>;
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(NewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onCancelButtonClicked should call router with path "courses"', () => {
    const routerSpy = spyOn(router, 'navigateByUrl');
    component.onCancelButtonClicked();
    expect(routerSpy).toHaveBeenCalledOnceWith('courses');
  });
});
