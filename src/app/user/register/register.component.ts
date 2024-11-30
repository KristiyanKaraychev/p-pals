import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { matchPasswordsDirective } from '../../directives/matchPasswords.directive';
import { EmailDirective } from '../../directives/email.directive';
import { UserService } from '../user.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [RouterLink, FormsModule, EmailDirective, matchPasswordsDirective],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
})
export class RegisterComponent {
    constructor(
        private userService: UserService,
        private router: Router,
    ) {}

    register(form: NgForm) {
        if (form.invalid) {
            console.log(form.errors);
            console.log('Invalid login form.');
            return;
        }

        this.userService.register();
        this.router.navigate(['/home']);
    }
}
