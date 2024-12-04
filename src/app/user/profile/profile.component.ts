import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthenticationUser, ProfileDetails, User } from '../../types/user';
import { DatePipe } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ImgURLDirective } from '../../directives/imgURL.directive';
import { EmailDirective } from '../../directives/email.directive';
import { TelephoneNumberDirective } from '../../directives/telephoneNumber.directive';
import { filter, map } from 'rxjs';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [
        FormsModule,
        DatePipe,
        ImgURLDirective,
        EmailDirective,
        TelephoneNumberDirective,
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
    isEditMode: boolean = false;
    numLikes: number = 0;
    numPosts: number = 0;

    profileDetails: ProfileDetails = {
        username: '',
        email: '',
        tel: '',
        description: '',
        location: '',
        avatarImgURL: '',
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
            this.getPersonalPosts();
        });
        this.isEditMode = false;
    }

    toggleEditMode(): void {
        this.isEditMode = !this.isEditMode;
    }

    saveProfile(form: NgForm): void {
        if (form.invalid) {
            return;
        }

        let { username, email, tel, description, location, avatarImgURL } =
            form.value;

        if (username == '') username = this.profileDetails.username;
        if (email == '') email = this.profileDetails.email;
        if (tel == '') tel = this.profileDetails.tel;
        if (description == '') description = this.profileDetails.description;
        if (location == '') location = this.profileDetails.location;
        if (avatarImgURL == '') avatarImgURL = this.profileDetails.avatarImgURL;

        this.userService
            .saveProfile(
                username,
                email,
                tel,
                description,
                location,
                avatarImgURL,
            )
            .subscribe(() => {
                this.ngOnInit();
            });
    }

    onCancel(event: Event) {
        event.preventDefault();
        this.toggleEditMode();
    }

    getTotalLikes() {
        this.numLikes = 0;
        this.http.getAllComments().subscribe((data) => {
            data.filter(
                (post) => post.userId._id === this.userService.user?._id,
            ).forEach((comment) => {
                this.numLikes += comment.likes.length;
            });
        });
    }

    getPersonalPosts() {
        this.http
            .getAllPosts()
            .pipe(
                map((posts) =>
                    posts.filter(
                        (post) => post.userId._id == this.userService.user?._id,
                    ),
                ),
            )
            .subscribe((ownPosts) => {
                this.numPosts = ownPosts.length;
            });
    }
}
