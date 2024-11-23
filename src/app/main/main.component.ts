import { Component } from '@angular/core';
import { PreviewsListComponent } from '../previews-list/previews-list.component';
import { PostsListComponent } from '../posts-list/posts-list.component';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [PreviewsListComponent, PostsListComponent],
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
})
export class MainComponent {}
