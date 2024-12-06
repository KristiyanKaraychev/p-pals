import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
    name: 'shortTime',
    standalone: true,
})
export class ShortTimePipe implements PipeTransform {
    transform(date: string, ...args: unknown[]): unknown {
        return moment(date).fromNow();
    }
}
