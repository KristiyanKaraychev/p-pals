import { Component, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { matchPasswordsDirective } from '../../directives/matchPasswords.directive';
import { EmailDirective } from '../../directives/email.directive';
import { UserService } from '../user.service';
import { ErrorMsgService } from '../../core/error-msg/error-msg.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [RouterLink, FormsModule, EmailDirective, matchPasswordsDirective],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
})
export class RegisterComponent {
    hasError = false;
    errorMsg = signal('');

    constructor(
        private userService: UserService,
        private router: Router,
        private errorMsgService: ErrorMsgService,
    ) {}

    register(form: NgForm) {
        if (form.invalid) {
            // console.log(form.errors);
            // console.log('Invalid login form.');
            return;
        }

        this.errorMsgService.apiError$.subscribe((error: any) => {
            this.errorMsg.set(error?.error.message);
            if (this.errorMsg()?.length) {
                this.hasError = true;
            }
        });

        const { username, email, password, rePassword } = form.value;

        this.userService
            .register(username, email, password, rePassword)
            .subscribe((data) => {
                this.router.navigate(['/posts']);
            });
    }
}
