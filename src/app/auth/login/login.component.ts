import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public errorMessage?: string;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {

  }

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  public submitForm(): void {
    this.loginForm.markAsTouched();
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.getRawValue()).subscribe({
        next: (res: { token?: string }) => {
          this.authService.accessToken = res.token;
          this.authService.isLogged$.next(true);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        }
      });
    }
    this.errorMessage = undefined;
  }
}
