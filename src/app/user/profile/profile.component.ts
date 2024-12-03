import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthenticationUser, ProfileDetails, User } from '../../types/user';
import { DatePipe } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ImgURLDirective } from '../../directives/imgURL.directive';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [FormsModule, DatePipe, ImgURLDirective],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
    isEditMode: boolean = false;
    likes: number = 0;
    // user: User = {};

    profileDetails: ProfileDetails = {
        username: '',
        email: '',
        tel: '',
        description: '',
        location: '',
        created_at: '',
        themes: [],
        posts: [],
    };

    constructor(
        private userService: UserService,
        private http: ApiService,
    ) {}

    ngOnInit(): void {
        this.userService.getProfile().subscribe((user) => {
            this.profileDetails = user;
            this.getTotalLikes();
        });
    }

    toggleEditMode(): void {
        this.isEditMode = !this.isEditMode;
    }

    saveProfile(): void {
        // if (this.form.invalid) {
        //   return
        // }

        // this.userService.saveProfile(username,tel).subscribe(() => {
        //   this.toggleEditMode()
        // })

        console.log('profile saved');
        this.toggleEditMode();
    }

    onCancel(event: Event) {
        event.preventDefault();
        this.toggleEditMode();
    }

    getTotalLikes() {
        this.http.getAllComments().subscribe((data) => {
            data.filter(
                (post) => post.userId._id === this.userService.user?._id,
            ).forEach((comment) => {
                this.likes += comment.likes.length;
            });
        });
    }
}
