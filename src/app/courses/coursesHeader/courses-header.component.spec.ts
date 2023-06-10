import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesHeaderComponent } from './courses-header.component';

describe('CoursesHeaderComponent', () => {
    let component: CoursesHeaderComponent;
    let fixture: ComponentFixture<CoursesHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CoursesHeaderComponent],
            imports: [FormsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
  
    it('should emit a click event with a search query, when the Search button is clicked', () => {
        const event = spyOn(component.searchButtonClicked, 'emit');
        component.searchValue = 'course';
        component.onSearchButtonClicked();
        expect(event).toHaveBeenCalledWith('course');
    })
});
