import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp } from '@angular/fire/app';
import { getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';
import { provideDatabase } from '@angular/fire/database';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { appInterceptor } from './app.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        // provideFirebaseApp(() => initializeApp(environment.firebase)),
        // provideDatabase(() => getDatabase()),
        // provideHttpClient(),
        provideHttpClient(withInterceptors([appInterceptor])),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
    ],
};
