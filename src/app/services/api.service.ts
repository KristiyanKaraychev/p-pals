import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Comment } from '../types/comment';
import { Post } from '../types/post';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    URL: string = environment.apiURL;

    constructor(private http: HttpClient) {}

    getAllComments() {
        return this.http.get<Comment[]>(`${this.URL}/posts`);
    }

    getAllPosts() {
        return this.http.get<Post[]>(`${this.URL}/themes`);
    }

    getSinglePost(id: string) {
        return this.http.get<Post>(`${this.URL}/themes/${id}`);
    }

    createPost(postName: string, postText: string) {
        const body = { postName, postText };
        return this.http.post<Post>(`${this.URL}/themes`, body);
    }
}
