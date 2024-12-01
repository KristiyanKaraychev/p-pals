import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { UserService } from './user/user.service';
import { inject } from '@angular/core';
import { ErrorMsgComponent } from './core/error-msg/error-msg.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        redirectTo: () => {
            if (inject(UserService).isLoggedIn) {
                return '/posts';
            } else {
                return '/homeRedirected';
            }
        },
    },
    { path: 'homeRedirected', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    {
        path: 'posts',
        children: [
            { path: '', component: PostsListComponent },
            { path: ':postId', component: PostDetailsComponent },
        ],
    },
    {
        path: 'add-post',
        component: AddPostComponent,
        canActivate: [AuthenticationGuard],
    },
    { path: 'error', component: ErrorMsgComponent },
    { path: '404', component: ErrorComponent },
    { path: '**', redirectTo: '/404' },
];
