import { Directive } from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
} from '@angular/forms';
import { imgURLValidator } from '../utils/imgURL.validator';

@Directive({
    selector: '[imgURLVal]',
    standalone: true,
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: ImgURLDirective,
        },
    ],
})
export class ImgURLDirective implements Validator {
    constructor() {}

    validate(control: AbstractControl): ValidationErrors | null {
        const validatorFn = imgURLValidator();
        return validatorFn(control);
    }
}
