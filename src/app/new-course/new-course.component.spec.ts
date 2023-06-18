import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseComponent } from './new-course.component';
import { NewCourseModule } from './new-course.module';

describe('NewCourseComponent', () => {
  let component: NewCourseComponent;
  let fixture: ComponentFixture<NewCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCourseComponent],
      imports: [NewCourseModule]
    });
    fixture = TestBed.createComponent(NewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
