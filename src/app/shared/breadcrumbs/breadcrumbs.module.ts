import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
    declarations: [
        BreadcrumbsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    exports: [
        BreadcrumbsComponent
    ]
})
export class BreadcrumbsModule {}
