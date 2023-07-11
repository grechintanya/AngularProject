import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './login.component';
import { LoadingModule } from '../shared';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        BrowserModule,
        FormsModule,
        MatButtonModule,
        LoadingModule,
        MatIconModule,
        ReactiveFormsModule,
    ],
    exports: [LoginComponent],
    providers: [],
})
export class LoginModule {}
