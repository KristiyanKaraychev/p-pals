import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../user/user.service';

export const AuthenticationGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) => {
    const userService = inject(UserService);
    const router = inject(Router);

    if (userService.isLoggedIn) {
        return true;
    }
    router.navigate(['/home']);
    return false;
};
