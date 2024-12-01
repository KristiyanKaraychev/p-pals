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

    createPost(themeName: string, postText: string, imgURL: string) {
        const body = { themeName, postText, imgURL };
        return this.http.post<Post>(`/api/themes`, body);
    }

    createComment(postText: string, postId: string) {
        const body = { postText };
        return this.http.post<Comment>(`/api/themes/${postId}`, body);
    }

    // CRUD operations
    // update -> http.put
    updateTheme(themeId: string, themeName: string, postText: string) {
        const body = { themeName, postText };
        return this.http.put<Post>(`/api/themes/${themeId}`, body);
    }

    updatePost(themeId: string, postId: string) {
        const body = {};
        return this.http.put<Post>(
            `/api/themes/${themeId}/posts/${postId}`,
            body,
        );
    }

    // delete -> http.delete theme ID
    deleteComment(themeId: string, postId: string) {
        return this.http.delete(`/api/themes/${themeId}/posts/${postId}`);
    }
}
