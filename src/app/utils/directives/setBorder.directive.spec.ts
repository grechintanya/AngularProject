import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { setBorderDirective } from "./setBorder.directive";

@Component({
    template: `<div appSetBorder [creationDate]="date">VideoCourse</div>`
})
class TestComponent {
    date = new Date();
}

describe('SetBorderDirective', () => {

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let element: DebugElement;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [setBorderDirective, TestComponent]
        }).createComponent(TestComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.query(By.directive(setBorderDirective));
        jasmine.clock().mockDate(new Date(2023, 5, 5));
    });

    it('should not change border, if creation date less, than current date minus 14 days', () => {
        component.date = new Date(2023, 4, 20);
        fixture.detectChanges();
        expect(element.nativeElement.style.borderColor).toBeFalsy();
    });

    it('if creation date bigger, than current date minus 14 days, element should have a green border', () => {
        component.date = new Date(2023, 5, 4);
        fixture.detectChanges();
        expect(element.nativeElement.style.borderColor).toBe('green');
    });

    it('if creation date bigger, than current date, element should have a lightblue border', () => {
        component.date = new Date(2023, 5, 20);
        fixture.detectChanges();
        expect(element.nativeElement.style.borderColor).toBe('lightblue');
    });
})