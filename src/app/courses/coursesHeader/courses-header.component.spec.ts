import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesHeaderComponent } from './courses-header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoursesState } from 'src/app/store/courses';
import { provideMockStore } from '@ngrx/store/testing';

describe('CoursesHeaderComponent', () => {
    let component: CoursesHeaderComponent;
    let fixture: ComponentFixture<CoursesHeaderComponent>;
    const initialState: CoursesState = {
        courses: [],
        isLoading: false,
        error: null,
        searchQuery: ''
      }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CoursesHeaderComponent],
            imports: [FormsModule, HttpClientTestingModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [provideMockStore({ initialState })]
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
});
