import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appIfAuth]'
})
export class IfAuthenticatedDirective {

    constructor(private template: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
    ) {

    }

    @Input('appIfAuth') set DisplayView(condition: boolean) {
        if (condition) {
            this.viewContainer.createEmbeddedView(this.template)
        } else {
            this.viewContainer.clear()
        }
    }
}
