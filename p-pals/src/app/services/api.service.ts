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

    editComment(themeId: string, postId: string, postText: string) {
        const body = { postText };
        return this.http.put<Comment>(
            `/api/themes/${themeId}/posts/${postId}`,
            body,
        );
    }

    deleteComment(themeId: string, postId: string) {
        return this.http.delete(`/api/themes/${themeId}/posts/${postId}`);
    }

    likeComment(postId: string) {
        return this.http.put<Comment>(`/api/likes/${postId}`, {});
    }
}
