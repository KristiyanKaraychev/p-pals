import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'app-add-post',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './add-post.component.html',
    styleUrl: './add-post.component.css',
})
export class AddPostComponent {
    constructor(private apiService: ApiService) {}

    addPost(form: NgForm) {
        if (form.invalid) {
            return;
        }

        const { postTitle, postText } = form.value;

        this.apiService.createPost(postTitle, postText).subscribe((data) => {
            console.log(data);
        });
    }
}
