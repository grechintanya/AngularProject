import { NgModule } from '@angular/core';
import { FormatDurationPipe, FormatDatePipe } from '../utils/public_api';

@NgModule({
    declarations: [
        FormatDurationPipe,
        FormatDatePipe
    ],
    exports: [
        FormatDurationPipe,
        FormatDatePipe
    ]
})
export class PipesModule {}
