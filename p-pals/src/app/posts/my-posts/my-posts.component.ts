import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Post } from '../../types/post';
import { RouterLink } from '@angular/router';
import { EllipsisPipe } from '../../shared/pipes/ellipsis.pipe';
import { filter, map } from 'rxjs';
import { UserService } from '../../user/user.service';
import { User } from '../../types/user';

@Component({
    selector: 'app-my-posts',
    standalone: true,
    imports: [RouterLink, EllipsisPipe],
    templateUrl: './my-posts.component.html',
    styleUrl: './my-posts.component.css',
})
export class MyPostsComponent implements OnInit {
    posts: Post[] = [];

    constructor(
        private apiService: ApiService,
        private userService: UserService,
    ) {}

    ngOnInit(): void {
        this.apiService
            .getAllPosts()
            .pipe(
                map((posts) =>
                    posts.filter(
                        (post) => post.userId._id == this.userService.user?._id,
                    ),
                ),
            )
            .subscribe((filteredPosts) => {
                console.log(filteredPosts);

                this.posts = filteredPosts;
            });
    }
}
