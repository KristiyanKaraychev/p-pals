import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { RouterLink } from '@angular/router';
import { Post } from '../../types/post';
import { EllipsisPipe } from '../../shared/pipes/ellipsis.pipe';

@Component({
    selector: 'app-previews-list',
    standalone: true,
    imports: [RouterLink, EllipsisPipe],
    templateUrl: './posts-list.component.html',
    styleUrl: './posts-list.component.css',
})
export class PostsListComponent implements OnInit {
    posts: Post[] = [];

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.apiService.getAllPosts().subscribe((posts) => {
            // console.log('Posts:');
            // console.log(posts);
            this.posts = posts;
        });
    }
}
