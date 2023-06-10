import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { setBorderDirective } from "./setBorder.directive";

@Component({
    template: `<div *ngFor="let date of dateList">
                <div appSetBorder [creationDate]="date">VideoCourse</div>
            </div>`
})
class TestComponent {
    dateList = [new Date(2023, 4, 20), new Date(2023, 5, 5), new Date(2023, 5, 20)];
}

describe('SetBorderDirective', () => {

    let fixture: ComponentFixture<TestComponent>;
    let elements: DebugElement[];

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [setBorderDirective, TestComponent]
        }).createComponent(TestComponent);
        fixture.detectChanges();
        elements = fixture.debugElement.queryAll(By.directive(setBorderDirective));
        jasmine.clock().mockDate(new Date(2023, 5, 5));
    });

    it('should not change border, if creation date less, than current date minus 14 days', () => {
        const first = elements[0].nativeElement;
        expect(first.style.borderColor).toBeFalsy();
    });

    it('if creation date bigger, than current date minus 14 days, element should have a green border', () => {
        const second = elements[1].nativeElement;
        expect(second.style.borderColor).toBe('green');
    });

    it('if creation date bigger, than current date, element should have a lightblue border', () => {
        const third = elements[2].nativeElement;
        expect(third.style.borderColor).toBe('lightblue');
    });
})