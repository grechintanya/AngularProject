import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/appState.interface';
import { IfAuthenticatedDirective } from 'src/app/utils/public_api';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
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
        TestBed.configureTestingModule({
            declarations: [HeaderComponent, IfAuthenticatedDirective],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [provideMockStore({ initialState })],
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
        });
        fixture = TestBed.createComponent(HeaderComponent);
        store = TestBed.inject(Store<AppState>) as jasmine.SpyObj<Store<AppState>>;
        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
