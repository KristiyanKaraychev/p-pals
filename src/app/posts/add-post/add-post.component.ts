import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-add-post',
    standalone: true,
    imports: [],
    templateUrl: './add-post.component.html',
    styleUrl: './add-post.component.css',
})
export class AddPostComponent {
    constructor(private apiService: ApiService) {}

    addPost(event: Event, postName: string, postText: string) {
        event.preventDefault();
        console.log(postName, postText);
        this.apiService.createPost(postName, postText).subscribe((data) => {
            console.log(data);
        });
    }
}
