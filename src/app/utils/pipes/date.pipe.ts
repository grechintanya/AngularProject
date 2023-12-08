import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatDate',
})
export class DateToString implements PipeTransform {
    transform(dateString: string) {
        if (/\d{2}\/\d{2}\/\d{4}/.test(dateString)) return dateString;
        const date = new Date(dateString);
        if (String(date) === 'Invalid Date') return '';
        else {
            const year = date.toLocaleString('default', { year: 'numeric' });
            const month = date.toLocaleString('default', { month: '2-digit' });
            const day = date.toLocaleString('default', { day: '2-digit' });
            return `${day}/${month}/${year}`;
        }
    }
}

@Pipe({
    name: 'stringToDate',
})
export class StringToDate implements PipeTransform {
    transform(value: string | null | undefined) {
        if (value) {
            const day = value.slice(0, 2);
            const month = value.slice(3, 5);
            const year = value.slice(6);
            return `${year}-${month}-${day}`;
        }
        return '';
    }
}
