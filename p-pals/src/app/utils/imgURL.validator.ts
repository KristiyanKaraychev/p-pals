import { ValidatorFn } from '@angular/forms';

export function imgURLValidator(): ValidatorFn {
    const regex = new RegExp(`^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$`);

    return (control) => {
        const isInvalid = control.value === '' || regex.test(control.value);
        return isInvalid ? null : { imgURLValidator: true };
    };
}
