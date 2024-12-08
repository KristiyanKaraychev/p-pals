import { ValidatorFn } from '@angular/forms';

export function imgURLValidator(): ValidatorFn {
    const regex = new RegExp(
        `^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg|JPG|PNG)$`,
    );

    return (control) => {
        const isInvalid = control.value === '' || regex.test(control.value);
        return isInvalid ? null : { imgURLValidator: true };
    };
}
