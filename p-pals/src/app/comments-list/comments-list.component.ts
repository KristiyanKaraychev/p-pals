import { Component, OnInit } from '@angular/core';
import { Comment } from '../types/comment';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-posts-list',
    standalone: true,
    imports: [],
    templateUrl: './comments-list.component.html',
    styleUrl: './comments-list.component.css',
})
export class CommentsListComponent implements OnInit {
    comments: Comment[] = [];

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.apiService.getAllComments().subscribe((comments) => {
            // console.log({ comments });
            this.comments = comments;
        });
    }
}
