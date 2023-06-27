import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { CoursesModule } from './courses.module';
import { mockedCourses } from '../utils/public_api';
import { CoursesService } from '../services';
import { of } from 'rxjs';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let coursesService: jasmine.SpyObj<CoursesService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CoursesService', ['getCourseList', 'removeCourse']);
    TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      imports: [CoursesModule],
      providers: [{provide: CoursesService, useValue: spy}]
    }).compileComponents();
    
    fixture = TestBed.createComponent(CoursesComponent);
    coursesService = TestBed.inject(CoursesService) as jasmine.SpyObj<CoursesService>;
    coursesService.getCourseList.and.returnValue(of(mockedCourses));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should CoursesService getCourseList method, when onLoadMoreClick method is called', () => {
    component.onLoadMoreClick();
    expect(coursesService.getCourseList).toHaveBeenCalledWith(3, 3);
  });

  it("should call CoursesService's method 'removeCourse', when deleteCourse method is called", () => {
    coursesService.removeCourse.and.returnValue(of(null));
    component.deleteCourse(2);
    expect(coursesService.removeCourse).toHaveBeenCalledWith(2);
  });
});
