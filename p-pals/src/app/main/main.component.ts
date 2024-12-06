import { Component } from '@angular/core';
import { PostsListComponent } from '../posts/posts-list/posts-list.component';
import { CommentsListComponent } from '../comments-list/comments-list.component';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [PostsListComponent, CommentsListComponent],
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
})
export class MainComponent {}
