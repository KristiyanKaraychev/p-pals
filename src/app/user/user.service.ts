import { Injectable } from '@angular/core';
import { authenticationUser } from '../types/user';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    userKey = '[user]';
    user: authenticationUser | null = null;

    get isLoggedIn(): boolean {
        return !!this.user;
    }

    constructor() {
        try {
            const localStorageUser = localStorage.getItem(this.userKey) || '';
            this.user = JSON.parse(localStorageUser);
        } catch (error) {
            this.user = null;
        }
    }

    register() {
        this.user = {
            firstName: 'kris',
            email: 'kris@abv.bg',
            phoneNumber: '111-111-111',
            password: '123456',
            id: '111',
        };
        localStorage.setItem(this.userKey, JSON.stringify(this.user));
    }

    login() {
        this.user = {
            firstName: 'kris',
            email: 'kris@abv.bg',
            phoneNumber: '111-111-111',
            password: '123456',
            id: '111',
        };
        localStorage.setItem(this.userKey, JSON.stringify(this.user));
    }

    logout() {
        this.user = null;
        localStorage.removeItem(this.userKey);
    }
}
