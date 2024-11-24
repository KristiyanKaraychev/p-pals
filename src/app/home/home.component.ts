import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    get isLoggedIn(): boolean {
        return this.userService.isLoggedIn;
    }

    get firstName(): string {
        return this.userService.user?.firstName || '';
    }

    constructor(private userService: UserService) {}
}
