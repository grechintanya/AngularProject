import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import {CoursesModule} from './courses.module';
import { mockedCourses, FilterPipe } from '../utils/public_api';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      imports: [CoursesModule]
    });
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize a course list in ngOnInit method', () => {
    component.ngOnInit();
    expect(component.courseList).toEqual(mockedCourses);
  });

  it('should log the "load more" message to the console when onLoadMoreClick method is called', () => {
    const consoleSpy = spyOn(console, 'log');
    component.onLoadMoreClick();
    expect(consoleSpy).toHaveBeenCalledWith('load more...')
  });

  it("should log the course's id to the console when onDeleteButtonClicked method is called", () => {
    const consoleSpy = spyOn(console, 'log');
    component.onDeleteButtonClicked(2);
    expect(consoleSpy).toHaveBeenCalledWith(2);
  });

  it("should call FilterPipe transform method with a search query, when onSearchButtonClicked method is called", () => {
    const filterPipe = TestBed.inject(FilterPipe);
    const searchSpy = spyOn(filterPipe, 'transform');
    component.onSearchButtonClicked('course');
    expect(searchSpy).toHaveBeenCalledWith(component.courseList, 'course');
  });

});
