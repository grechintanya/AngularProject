import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[appSetBorder]' })

export class setBorderDirective implements OnInit {
    @Input() creationDate!: Date;

    constructor(private element: ElementRef) {
        this.element = element;
    }

    ngOnInit(): void {
        const today = new Date();
        if (this.creationDate <= today &&
            this.creationDate >= new Date(today.getTime() - 14*24*60*60*1000)) {
            this.element.nativeElement.style.border = '3px solid green';
        } else if (this.creationDate > today) {
            this.element.nativeElement.style.border = '3px solid lightblue';
        }
    }

}