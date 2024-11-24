import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Post } from '../../types/post';
import { UserService } from '../../user/user.service';

@Component({
    selector: 'app-post-details',
    standalone: true,
    imports: [],
    templateUrl: './post-details.component.html',
    styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
    post = {} as Post;

    constructor(
        private route: ActivatedRoute,
        private api: ApiService,
        private userService: UserService,
    ) {}

    get isLoggedIn(): boolean {
        return this.userService.isLoggedIn;
    }

    ngOnInit(): void {
        const id = this.route.snapshot.params['postId'];
        console.log('Post ID: ' + id);

        this.api.getSinglePost(id).subscribe((post) => {
            this.post = post;
        });
    }
}
