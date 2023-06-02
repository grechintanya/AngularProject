import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
    let component: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CourseItemComponent],
            imports: [FormsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseItemComponent);
        component = fixture.componentInstance;
        component.course = {
            id: 1,
            title: 'Course1',
            description: 'description',
            duration: 50,
            creationDate: '12/12/2020'
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    it('should emit a click event with course ID when the Delete button is clicked', () => {
        const event = spyOn(component.deleteButtonClicked, 'emit');
        component.onDeleteButtonClicked();
        expect(event).toHaveBeenCalledWith(1);
    });
});
