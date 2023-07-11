import { Component, forwardRef } from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator,
} from '@angular/forms';

const DATE_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateComponent),
    multi: true,
};

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.css'],
    providers: [
        DATE_VALUE_ACCESSOR,
        { provide: NG_VALIDATORS, useExisting: DateComponent, multi: true },
    ],
})
export class DateComponent implements ControlValueAccessor, Validator {
    _creationDate!: string;
    errors: boolean = false;
    onChange = (value: any) => {};
    onTouched = () => {};

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const sample = /\d{2}\/\d{2}\/\d{4}/;
        if (sample.test(control.value)) {
            this.errors = false;
            return null;
        } else {
            this.errors = true;
            return { invalidDateFormat: true };
        }
    }

    set creationDate(value: string) {
        this._creationDate = value;
        this.onChange(this._creationDate);
    }

    get creationDate() {
        return this._creationDate;
    }

    writeValue(value: string): void {
        this._creationDate = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}
