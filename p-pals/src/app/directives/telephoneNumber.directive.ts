import { Directive } from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
} from '@angular/forms';
import { telephoneNumberValidator } from '../utils/telephoneNumber.validator';

@Directive({
    selector: '[appTelVal]',
    standalone: true,
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: TelephoneNumberDirective,
        },
    ],
})
export class TelephoneNumberDirective implements Validator {
    constructor() {}

    validate(control: AbstractControl): ValidationErrors | null {
        const validatorFn = telephoneNumberValidator();
        return validatorFn(control);
    }
}
