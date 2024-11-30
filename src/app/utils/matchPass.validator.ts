import { ValidatorFn } from '@angular/forms';

export function matchPassValidator(passwordControlName: string): ValidatorFn {
    return (control) => {
        const passwordFormControl = passwordControlName;
        const rePasswordFormControl = control;

        if (!passwordFormControl || !rePasswordFormControl) {
            return null;
        }

        const passwordsAreMatching =
            passwordFormControl === rePasswordFormControl.value;

        return passwordsAreMatching ? null : { matchPasswordsValidator: true };
    };
}
