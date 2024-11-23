import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ref } from '@angular/fire/database';
import { get } from 'firebase/database';
import { FirebaseService } from './services/firebase.service';
import { ApiService } from './services/api.service';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    // data: any;

    // constructor(private firebaseService: FirebaseService) {}

    // ngOnInit() {
    // this.firebaseService.getData('posts').subscribe((x) => {
    //     console.log(x);
    // });

    // this.firebaseService.getAll('posts').subscribe((x) => {
    //     console.log(x);
    // });

    // this.firebaseService.post('posts', { text: 'test1' }).subscribe((x) => {
    //     debugger;
    //     console.log(x);
    // });
    // }

    // this.firebaseService.getData('posts').subscribe({
    //     next: (data: any) => {
    //         console.log('Data received:', data);
    //         this.data = data;
    //     },
    //     error: (err: any) => console.error('Error fetching data:', err),
    // });

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.apiService.getAllPosts('posts').subscribe((x) => {
            console.log(x);
        });

        // this.firebaseService.post('posts', { text: 'test1' }).subscribe((x) => {
        //     debugger;
        //     console.log(x);
        // });
    }
}
