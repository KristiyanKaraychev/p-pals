import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-post',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './add-post.component.html',
    styleUrl: './add-post.component.css',
})
export class AddPostComponent {
    constructor(
        private apiService: ApiService,
        private router: Router,
    ) {}

    addPost(form: NgForm) {
        if (form.invalid) {
            return;
        }

        const { postTitle, postText } = form.value;

        debugger;

        this.apiService.createPost(postTitle, postText).subscribe((data) => {
            console.log(data);
            this.router.navigate(['/posts']);
        });
    }

    onCancel(form: NgForm) {
        form.resetForm();
        console.log('Form has been reset.');
    }
}
