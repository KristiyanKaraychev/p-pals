import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'posts',
        children: [
            { path: '', component: PostsListComponent },
            { path: ':postId', component: PostDetailsComponent },
        ],
    },
    { path: 'add-post', component: AddPostComponent },
    { path: '404', component: ErrorComponent },
    { path: '**', redirectTo: '/404' },
];
