import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailDirective } from '../../directives/email.directive';
import { ErrorMsgService } from '../../core/error-msg/error-msg.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterLink, FormsModule, EmailDirective],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    hasError = false;
    errorMsg = signal('');

    constructor(
        private userService: UserService,
        private router: Router,
        private errorMsgService: ErrorMsgService,
    ) {}

    login(form: NgForm) {
        if (form.invalid) {
            console.log('Invalid login form.');
            console.log(form);
            return;
        }

        this.errorMsgService.apiError$.subscribe((error: any) => {
            this.errorMsg.set(error?.error.message);
            if (this.errorMsg()?.length) {
                this.hasError = true;
            }
        });

        const { email, password } = form.value;

        this.userService.login(email, password).subscribe((data) => {
            this.router.navigate(['/posts']);
        });
    }
}
