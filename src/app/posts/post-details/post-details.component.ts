import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Post } from '../../types/post';
import { UserService } from '../../user/user.service';
import { HomeComponent } from '../../home/home.component';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthenticationUser, User } from '../../types/user';

@Component({
    selector: 'app-post-details',
    standalone: true,
    imports: [HomeComponent, FormsModule],
    templateUrl: './post-details.component.html',
    styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
    post = {} as Post;
    user = {} as AuthenticationUser;

    constructor(
        private route: ActivatedRoute,
        private api: ApiService,
        private userService: UserService,
        private router: Router,
    ) {}

    get isLoggedIn(): boolean {
        return this.userService.isLoggedIn;
    }

    get username(): string {
        return this.userService.user?.username || '';
    }

    ngOnInit(): void {
        const id = this.route.snapshot.params['postId'];
        console.log('Post ID: ' + id);
        this.loadPage(id);
        this.userService.getProfile().subscribe((user) => {
            this.user = user;
        });
    }

    createComment(form: NgForm) {
        const { postText } = form.value;

        this.api.createComment(postText, this.post._id).subscribe((data) => {
            console.log(data);
            form.reset();
            this.loadPage(this.post._id);
        });
    }

    deleteComment(commendId: string) {
        this.api.deleteComment(this.post._id, commendId).subscribe(() => {
            this.loadPage(this.post._id);
        });
    }

    loadPage(id: string) {
        this.api.getSinglePost(id).subscribe((post) => {
            this.post = post;
        });
    }
}
