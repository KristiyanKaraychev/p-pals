import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Post } from '../../types/post';
import { UserService } from '../../user/user.service';
import { HomeComponent } from '../../home/home.component';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthenticationUser, User } from '../../types/user';
import { Comment } from '../../types/comment';

@Component({
    selector: 'app-post-details',
    standalone: true,
    imports: [HomeComponent, FormsModule],
    templateUrl: './post-details.component.html',
    styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
    post = {} as Post;
    comment = {} as Comment;
    user = {} as AuthenticationUser;
    isEditMode: boolean = false;

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

    toggleEditMode() {
        this.isEditMode = !this.isEditMode;
    }

    ngOnInit(): void {
        const id = this.route.snapshot.params['postId'];
        console.log('Post ID: ' + id);
        this.api.getSinglePost(id).subscribe((post) => {
            this.post = post;
        });
        this.userService.getProfile().subscribe((user) => {
            this.user = user;
        });
        this.isEditMode = false;
    }

    createComment(form: NgForm) {
        const { postText } = form.value;

        this.api.createComment(postText, this.post._id).subscribe((data) => {
            console.log(data);
            form.reset();
            // this.loadPage(this.post._id);
            this.ngOnInit();
        });
    }

    editComment(commentId: string, form: NgForm) {
        const { postText } = form.value;
        this.api
            .editComment(this.post._id, commentId, postText)
            .subscribe((data) => {
                console.log(data);
                this.ngOnInit();
            });
    }

    deleteComment(commentId: string) {
        this.api.deleteComment(this.post._id, commentId).subscribe(() => {
            // this.loadPage(this.post._id);
            // debugger;
            // this.router.navigate([`/posts/${this.post._id}`]);
            this.ngOnInit();
        });
    }

    likeComment(commentId: string) {
        this.api.likeComment(commentId).subscribe(() => {
            this.ngOnInit();
        });
    }

    onEdit(commentId: string) {
        this.comment._id = commentId;
        this.toggleEditMode();
    }

    onCancel() {
        console.log('Form has been reset.');
        this.ngOnInit();
    }

    // loadPage(id: string) {
    //     this.api.getSinglePost(id).subscribe((post) => {
    //         this.post = post;
    //     });
    // }
}
