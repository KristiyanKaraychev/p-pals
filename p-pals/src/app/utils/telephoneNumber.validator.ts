import { ValidatorFn } from '@angular/forms';

export function telephoneNumberValidator(): ValidatorFn {
    const regex =
        /^(\+(\d{1,3})\s?)?(\(?\d{3}\)?|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

    return (control) => {
        const isInvalid = control.value === '' || regex.test(control.value);
        return isInvalid ? null : { telephoneNumberValidator: true };
    };
}
