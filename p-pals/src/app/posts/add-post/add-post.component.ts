import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ImgURLDirective } from '../../directives/imgURL.directive';

@Component({
    selector: 'app-add-post',
    standalone: true,
    imports: [FormsModule, ImgURLDirective],
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

        const { postTitle, postText, postImgUrl } = form.value;

        // const postImgFormatted = postImg.split('\\').at(-1);
        // console.log(postImgFormatted);

        // debugger;

        this.apiService
            .createPost(postTitle, postText, postImgUrl)
            .subscribe((data) => {
                console.log(data);
                this.router.navigate(['/posts']);
            });
    }

    onCancel(form: NgForm) {
        form.resetForm();
        console.log('Form has been reset.');
        this.router.navigate(['/posts']);
    }
}
