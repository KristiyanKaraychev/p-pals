import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err),
);

// bootstrapApplication(AppComponent, {
//     providers: [
//         provideFirebaseApp(() => initializeApp(environment.firebase)),
//         provideDatabase(() => getDatabase()),
//     ],
// }).catch((err) => console.error(err));
