import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FormatDurationPipe } from 'src/app/utils/public_api';

import { DurationComponent } from './duration.component';

describe('DurationComponent', () => {
  let component: DurationComponent;
  let fixture: ComponentFixture<DurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DurationComponent, FormatDurationPipe],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(DurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
