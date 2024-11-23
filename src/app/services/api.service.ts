import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post } from '../types/post';
import { Preview } from '../types/preview';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    getAllPosts() {
        const URL = environment.apiURL;
        return this.http.get<Post[]>(`${URL}/posts`);
    }

    getAllPreviews() {
        const URL = environment.apiURL;
        return this.http.get<Preview[]>(`${URL}/themes`);
    }

    post(path: string, content: {}) {
        const URL = environment.apiURL;
        return this.http.post(`${URL}/${path}`, content);
    }
}
