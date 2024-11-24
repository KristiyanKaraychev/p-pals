import { Injectable } from '@angular/core';
import { Database, ref, onValue, DataSnapshot } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { get } from 'firebase/database';
import { HttpClient } from '@angular/common/http';
import { Post } from '../types/comment';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService {
    // constructor(private database: Database) {}
    // getData(path: string): Observable<any> {
    //     return new Observable((observer) => {
    //         const dbRef = ref(this.database, path);
    //         const unsubscribe = onValue(
    //             dbRef,
    //             (snapshot: DataSnapshot) => {
    //                 const data = snapshot.val();
    //                 observer.next(data);
    //             },
    //             (error) => observer.error(error),
    //         );
    //         return () => unsubscribe();
    //     });
    // }
}
