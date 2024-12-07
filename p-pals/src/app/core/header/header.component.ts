import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    menuOpen = false;

    get isLoggedIn(): boolean {
        return this.userService.isLoggedIn;
    }

    get username(): string {
        return this.userService.user?.username || '';
    }

    constructor(
        private userService: UserService,
        private router: Router,
    ) {}

    logout() {
        this.userService.logout().subscribe(() => {
            this.router.navigate(['/login']);
        });
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    closeMenu() {
        this.menuOpen = false;
    }
}
