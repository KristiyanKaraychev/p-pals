import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Post } from '../types/post';

@Component({
    selector: 'app-posts-list',
    standalone: true,
    imports: [],
    templateUrl: './posts-list.component.html',
    styleUrl: './posts-list.component.css',
})
export class PostsListComponent implements OnInit {
    posts: Post[] = [];

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.apiService.getAllPosts().subscribe((posts) => {
            console.log({ posts });
            this.posts = posts;
        });
    }
}
