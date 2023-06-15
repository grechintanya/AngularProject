import { NgModule } from '@angular/core';
import { FormatDurationPipe } from '../utils/public_api';

@NgModule({
    declarations: [
        FormatDurationPipe
    ],
    exports: [
        FormatDurationPipe
    ]
})
export class PipesModule {}
