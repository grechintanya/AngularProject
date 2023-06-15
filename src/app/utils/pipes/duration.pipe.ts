import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {
    transform(duration: number | string) {
        if (!duration) {
            return ''
        }
        if (typeof duration === 'string') {
            duration = Number(duration)
        }
        if (duration <= 60) {
            return `${duration}min`
        } else {
            const hours = Math.floor(duration / 60);
            const minutes = duration - hours * 60;
            return `${hours}h ${minutes}min`
        }
    }
}
