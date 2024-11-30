import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailDirective } from '../../directives/email.directive';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterLink, FormsModule, EmailDirective],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    temp = [];

    constructor(
        private userService: UserService,
        private router: Router,
    ) {}

    // login(event: Event, emailValue: string, passwordValue: string) {
    login(form: NgForm) {
        // event.preventDefault();

        if (form.invalid) {
            console.log('Invalid login form.');
            console.log(form);
            return;
        }
        this.userService.login();
        this.router.navigate(['/home']);
    }
}
