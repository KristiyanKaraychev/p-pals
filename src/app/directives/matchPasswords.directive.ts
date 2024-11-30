import { Directive, Input } from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
} from '@angular/forms';
import { matchPassValidator } from '../utils/matchPass.validator';

@Directive({
    selector: '[appPasswords]',
    standalone: true,
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: matchPasswordsDirective,
        },
    ],
})
export class matchPasswordsDirective implements Validator {
    @Input() appPasswords: string = '';

    constructor() {}

    validate(control: AbstractControl): ValidationErrors | null {
        const validatorFn = matchPassValidator(this.appPasswords);
        return validatorFn(control);
    }
}
