import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesHeaderComponent } from './courses-header.component';
import { By } from '@angular/platform-browser';

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
    
    it('should log a search value to the console', () => {
        component.searchValue = 'course';
        const logSpy = spyOn(console, 'log');
        fixture.detectChanges();
        component.onSearchButtonClicked(component.searchValue);
        expect(logSpy).toHaveBeenCalledWith('course');
    })
});
