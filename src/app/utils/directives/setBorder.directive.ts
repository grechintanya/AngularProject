import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[appSetBorder]' })

export class setBorderDirective implements OnInit {
    @Input() creationDate!: string;

    constructor(private element: ElementRef) { }

    ngOnInit(): void {
        const today = new Date();
        const fourteenDays = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000);
        if (new Date(this.creationDate) <= today && new Date(this.creationDate) >= fourteenDays) {
            this.element.nativeElement.style.border = '3px solid green';
        } else if (new Date(this.creationDate) > today) {
            this.element.nativeElement.style.border = '3px solid lightblue';
        }
    }

}