import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Post } from '../../types/post';
import { UserService } from '../../user/user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Comment } from '../../types/comment';
import { ShortTimePipe } from '../../shared/pipes/short-time.pipe';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-post-details',
    standalone: true,
    imports: [FormsModule, ShortTimePipe, DatePipe],
    templateUrl: './post-details.component.html',
    styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
    post = {} as Post;
    comment = {} as Comment;
    isEditMode: boolean = false;
    numOfComments: number = 0;

    constructor(
        private route: ActivatedRoute,
        private api: ApiService,
        private userService: UserService,
    ) {}

    get isLoggedIn(): boolean {
        return this.userService.isLoggedIn;
    }

    get getUserId(): string | undefined {
        return this.userService.userId;
    }

    get username(): string {
        return this.userService.user?.username || '';
    }

    toggleEditMode() {
        this.isEditMode = !this.isEditMode;
    }

    ngOnInit(): void {
        const id = this.route.snapshot.params['postId'];
        // console.log('Post ID: ' + id);
        this.api.getSinglePost(id).subscribe((post) => {
            this.post = post;
            this.numOfComments = this.post.posts.length;
        });

        this.isEditMode = false;
    }

    createComment(form: NgForm) {
        const { postText } = form.value;

        this.api.createComment(postText, this.post._id).subscribe((data) => {
            // console.log(data);
            form.reset();
            this.ngOnInit();
        });
    }

    editComment(commentId: string, form: NgForm) {
        const { postText } = form.value;
        this.api
            .editComment(this.post._id, commentId, postText)
            .subscribe((data) => {
                // console.log(data);
                this.ngOnInit();
            });
    }

    deleteComment(commentId: string) {
        this.api.deleteComment(this.post._id, commentId).subscribe(() => {
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
        // console.log('Form has been reset.');
        this.ngOnInit();
    }
}
