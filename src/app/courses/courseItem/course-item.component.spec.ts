import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseItemComponent } from './course-item.component';
import { CoursesModule } from '../courses.module';
import { Router } from '@angular/router';

describe('CourseItemComponent', () => {
    let component: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;
    let router: Router;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CourseItemComponent],
            imports: [FormsModule, CoursesModule, RouterTestingModule.withRoutes([])],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseItemComponent);
        router = TestBed.inject(Router);
        component = fixture.componentInstance;
        component.course = {
            id: 1,
            name: 'Course1',
            description: 'description',
            length: 50,
            date: '2020-11-12',
            isTopRated: false,
            authors: []
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit a click event with course ID when the Delete button is clicked', () => {
        const event = spyOn(component.deleteButtonClicked, 'emit');
        component.onDeleteButtonClicked();
        expect(event).toHaveBeenCalledWith({ courseID: 1, title: 'Course1' });
    });

    it('should call router when the Edit button is clicked', () => {
        const routerSpy = spyOn(router, 'navigateByUrl');
        component.onEditButtonClicked();
        expect(routerSpy).toHaveBeenCalledWith('courses/1');
    });
});