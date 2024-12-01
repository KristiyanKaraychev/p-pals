import { Injectable } from '@angular/core';
import { AuthenticationUser } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    userKey = '[user]';
    user: AuthenticationUser | null = null;

    private user$$ = new BehaviorSubject<AuthenticationUser | null>(null);
    private user$ = this.user$$.asObservable();

    get isLoggedIn(): boolean {
        return !!this.user;
    }

    constructor(private http: HttpClient) {
        // try {
        //     const localStorageUser = localStorage.getItem(this.userKey) || '';
        //     this.user = JSON.parse(localStorageUser);
        // } catch (error) {
        //     this.user = null;
        // }
        this.user$.subscribe((user) => {
            this.user = user;
        });
    }

    register(
        username: string,
        email: string,
        password: string,
        rePassword: string,
    ) {
        // this.user = {
        //     firstName: 'kris',
        //     email: 'kris@abv.bg',
        //     // phoneNumber: '111-111-111',
        //     password: '123456',
        //     id: '111',
        // };

        return this.http
            .post<AuthenticationUser>('/api/register', {
                username,
                email,
                password,
                rePassword,
            })
            .pipe(tap((user) => this.user$$.next(user)));

        // localStorage.setItem(this.userKey, JSON.stringify(this.user));
    }

    login(email: string, password: string) {
        // this.user = {
        //     firstName: 'kris',
        //     email: 'kris@abv.bg',
        //     // phoneNumber: '111-111-111',
        //     password: '123456',
        //     id: '111',
        // };

        return this.http
            .post<AuthenticationUser>('/api/login', {
                email,
                password,
            })
            .pipe(tap((user) => this.user$$.next(user)));

        // localStorage.setItem(this.userKey, JSON.stringify(this.user));
    }

    logout() {
        // this.user = null;
        // localStorage.removeItem(this.userKey);
        return this.http
            .post('/api/logout', {})
            .pipe(tap(() => this.user$$.next(null)));
    }

    getProfile() {
        return this.http
            .get<AuthenticationUser>('/api/users/profile')
            .pipe(tap((user) => this.user$$.next(user)));
    }
}
