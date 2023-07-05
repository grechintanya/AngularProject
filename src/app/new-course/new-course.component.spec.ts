import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { CoursesService, CourseResolver } from '../services';
import { NewCourseComponent } from './new-course.component';
import { NewCourseModule } from './new-course.module';
import { CoursesState } from '../store/courses';

describe('NewCourseComponent', () => {
  let component: NewCourseComponent;
  let fixture: ComponentFixture<NewCourseComponent>;
  let router: Router;
  const initialState: CoursesState = {
    courses: [],
    isLoading: false,
    error: null,
    searchQuery: ''
  }

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CoursesService', ['createCourse', 'updateCourse']);
    TestBed.configureTestingModule({
      declarations: [NewCourseComponent],
      imports: [NewCourseModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        { provide: CoursesService, useValue: spy },
        CourseResolver,
        provideMockStore({ initialState })
      ]
    });
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
