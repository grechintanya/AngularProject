import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/appState.interface';

import { AuthorsComponent } from './authors.component';

describe('AuthorsComponent', () => {
    let component: AuthorsComponent;
    let fixture: ComponentFixture<AuthorsComponent>;
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

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AuthorsComponent],
            providers: [provideMockStore({ initialState })],
            imports: [FormsModule],
        });
        fixture = TestBed.createComponent(AuthorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
