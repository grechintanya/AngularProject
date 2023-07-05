import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { AuthService } from '../services';
import { authActions, AuthState } from '../store/auth';
import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store<AuthState>;
  const initialState: AuthState = {
    user: { token: '' },
    isLoading: false,
    error: null,
    isAuthenticated: false
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [LoginModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [AuthService, provideMockStore({ initialState })]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onLoginButtonClicked method should dispatch login action to the store', () => {
    const storeSpy = spyOn(store, 'dispatch');
    component.login = 'test';
    component.password = '123';
    component.onLoginButtonClicked();
    const action = authActions.login({login: 'test', password: '123'});
    expect(storeSpy).toHaveBeenCalledWith(action);
  })
});
