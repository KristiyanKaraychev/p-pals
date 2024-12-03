import { Injectable, OnDestroy } from '@angular/core';
import { AuthenticationUser, ProfileDetails } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, retry, Subscription, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService implements OnDestroy {
    userKey = '[user]';
    user: AuthenticationUser | null = null;
    userSubscription: Subscription | null = null;

    private user$$ = new BehaviorSubject<AuthenticationUser | null>(null);
    private user$ = this.user$$.asObservable();

    get isLoggedIn(): boolean {
        return !!this.user;
    }

    get userId(): string | undefined {
        return this.user?._id;
    }

    constructor(private http: HttpClient) {
        // try {
        //     const localStorageUser = localStorage.getItem(this.userKey) || '';
        //     this.user = JSON.parse(localStorageUser);
        // } catch (error) {
        //     this.user = null;
        // }
        this.userSubscription = this.user$.subscribe((user) => {
            this.user = user;
        });
    }

    register(
        username: string,
        email: string,
        password: string,
        rePassword: string,
    ) {
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

    saveProfile(username: string, email: string, tel?: string) {
        return this.http
            .put<AuthenticationUser>(`/api/users/profile`, {
                username,
                email,
                tel,
            })
            .pipe(
                tap((user) => {
                    this.user$$.next(user);
                }),
            );
    }

    ngOnDestroy(): void {
        this.userSubscription?.unsubscribe();
    }
}
