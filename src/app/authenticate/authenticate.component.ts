import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-authenticate',
    standalone: true,
    imports: [],
    templateUrl: './authenticate.component.html',
    styleUrl: './authenticate.component.css',
})
export class AuthenticateComponent implements OnInit {
    isAuthenticated = true;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.getProfile().subscribe({
            next: () => {
                this.isAuthenticated = false;
            },
            error: () => {
                this.isAuthenticated = false;
            },
            complete: () => {
                this.isAuthenticated = false;
            },
        });
    }
}
