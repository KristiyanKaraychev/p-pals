import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { ErrorMsgService } from './core/error-msg/error-msg.service';

const URL = environment.apiURL;
const API = '/api';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
    if (req.url.startsWith(API)) {
        req = req.clone({
            url: req.url.replace(API, URL),
            withCredentials: true,
        });
    }

    const errorMsgService = inject(ErrorMsgService);
    const router = inject(Router);

    return next(req).pipe(
        catchError((err) => {
            errorMsgService.setError(err);
            if (err.status === 401) {
                router.navigate(['/login']);
            } else if (err.status == 409) {
                router.navigate(['/register']);
            } else {
                router.navigate(['/error']);
            }

            return [err];
        }),
    );
};
