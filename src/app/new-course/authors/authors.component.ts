import { AfterViewInit, Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    NgForm,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/store/appState.interface';
import { selectAllAuthors } from 'src/app/store/courses';
import { Author } from 'src/app/utils/public_api';

const AUTHORS_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthorsComponent),
    multi: true,
};

@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.css'],
    providers: [
        AUTHORS_VALUE_ACCESSOR,
        { provide: NG_VALIDATORS, useExisting: AuthorsComponent, multi: true },
    ],
})
export class AuthorsComponent implements OnInit, AfterViewInit, ControlValueAccessor, Validator {
    constructor(private store: Store<AppState>) {}

    authors: Author[] = [];
    errors = false;
    allAuthors$!: Observable<Author[]>;
    allAuthors!: Author[];
    @ViewChild('allAuthorsForm') allAuthorsForm!: NgForm;

    onChange = (value: any) => {};
    onTouched = () => {};

    writeValue(value: Author[]): void {
        if (value) this.authors = [...value];
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    ngOnInit(): void {
        this.allAuthors$ = this.store.select(selectAllAuthors);
        this.allAuthors$.subscribe((value) => (this.allAuthors = value));
    }

    ngAfterViewInit(): void {
        setTimeout(() => this.allAuthorsForm.setValue({ allAuthorsSelect: null }), 0);
    }

    onSelectChanged(value: string) {
        if (!this.authors.find((item) => item.id === value)) {
            const author = this.allAuthors.find((item) => item.id === value);
            if (author) this.authors.push(author);
            this.onChange(this.authors);
        }
    }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        if (control.value.length > 0) {
            this.errors = false;
            return null;
        } else {
            this.errors = true;
            return { noAuthor: true };
        }
    }

    authorDelete(authorId: string | number) {
        this.authors = this.authors.filter((item) => item.id !== authorId);
        this.allAuthorsForm.setValue({ allAuthorsSelect: null });
        if (!this.authors.length) {
            this.onTouched();
        }
        this.onChange(this.authors);
    }
}
