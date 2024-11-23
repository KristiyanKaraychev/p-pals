import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post, Preview } from '../types/post';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    getAllPosts(path: string) {
        const URL = environment.apiURL;
        return this.http.get<Post[]>(`${URL}/${path}`);
    }

    getAllPreviews(path: string) {
        const URL = environment.apiURL;
        return this.http.get<Preview[]>(`${URL}/${path}`);
    }

    post(path: string, content: {}) {
        const URL = environment.apiURL;
        return this.http.post(`${URL}/${path}`, content);
    }
}
