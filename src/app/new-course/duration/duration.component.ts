import { Component, forwardRef, Input } from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator,
} from '@angular/forms';

const DURATION_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationComponent),
    multi: true,
};

@Component({
    selector: 'app-duration',
    templateUrl: './duration.component.html',
    styleUrls: ['./duration.component.css'],
    providers: [
        DURATION_VALUE_ACCESSOR,
        { provide: NG_VALIDATORS, useExisting: DurationComponent, multi: true },
    ],
})
export class DurationComponent implements ControlValueAccessor, Validator {
    _duration!: string;
    errors = false;

    onChange = (value: any) => {};
    onTouched = () => {};

    set duration(value: string) {
        this._duration = value;
        this.onChange(this._duration);
    }

    get duration() {
        return this._duration;
    }

    writeValue(value: string): void {
        this._duration = value;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        if (/^\d+$/.test(control.value)) {
            this.errors = false;
            return null;
        } else {
            this.errors = true;
            return { onlyNumber: true };
        }
    }
}
