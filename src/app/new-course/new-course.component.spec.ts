import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesService } from '../services';

import { NewCourseComponent } from './new-course.component';
import { NewCourseModule } from './new-course.module';

describe('NewCourseComponent', () => {
  let component: NewCourseComponent;
  let fixture: ComponentFixture<NewCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCourseComponent],
      imports: [NewCourseModule],
      providers: [CoursesService]
    });
    fixture = TestBed.createComponent(NewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
