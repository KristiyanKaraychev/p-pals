import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ellipsis',
    standalone: true,
})
export class EllipsisPipe implements PipeTransform {
    transform(value: string, maxCharCount = 5): unknown {
        const dots = value.length > maxCharCount ? '...' : '';
        return `${value.substring(0, maxCharCount)}${dots}`;
    }
}
