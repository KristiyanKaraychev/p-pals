import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../types/comment';
import { Post } from '../types/post';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    getAllComments() {
        return this.http.get<Comment[]>(`/api/posts`);
    }

    getAllPosts() {
        return this.http.get<Post[]>(`/api/themes`);
    }

    getSinglePost(id: string) {
        return this.http.get<Post>(`/api/themes/${id}`);
    }

    createPost(postName: string, postText: string) {
        const body = { postName, postText };
        return this.http.post<Post>(`/api/themes`, body);
    }
}
