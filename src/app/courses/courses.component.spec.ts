import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { CoursesComponent } from './courses.component';
import { CoursesModule } from './courses.module';
import { CoursesService } from '../services';
import { coursesActions } from '../store/courses';
import { AppState } from '../store/appState.interface';

describe('CoursesComponent', () => {
    let component: CoursesComponent;
    let fixture: ComponentFixture<CoursesComponent>;
    let coursesService: jasmine.SpyObj<CoursesService>;
    const initialState: AppState = {
        auth: {
            user: { token: '' },
            isLoading: false,
            error: null,
            isAuthenticated: false,
        },
        courses: {
            courses: [],
            isLoading: false,
            error: null,
            searchQuery: '',
            allAuthors: [],
        },
    };
    let store: Store<AppState>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('CoursesService', [
            'getCourseList',
            'removeCourse',
            'searchQuery',
        ]);
        TestBed.configureTestingModule({
            declarations: [CoursesComponent],
            imports: [CoursesModule],
            providers: [
                { provide: CoursesService, useValue: spy },
                provideMockStore({ initialState }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(CoursesComponent);
        coursesService = TestBed.inject(CoursesService) as jasmine.SpyObj<CoursesService>;

        coursesService.searchQuery = new Subject<string>();
        store = TestBed.inject(Store<AppState>) as jasmine.SpyObj<Store<AppState>>;
        spyOn(store, 'dispatch').and.callThrough();

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('when ngOnInit method is called, the store should dispatch the getCourses action', () => {
        const action = coursesActions.getCourses();
        component.ngOnInit();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('the store should dispatch the LoadMoreClicked action, when onLoadMoreClick method is called', () => {
        component.start = 3;
        component.searchQuery = 'test';
        component.onLoadMoreClick();
        const action = coursesActions.loadMoreClicked({ start: 3, searchQuery: 'test' });
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('the store should dispatch the DeleteCourse action, when deleteCourse method is called', () => {
        const action = coursesActions.deleteCourse({ id: 2 });
        component.deleteCourse(2);
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });
});
