import {NgIf} from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Router, RouterLink} from '@angular/router';
import {InputFieldComponent} from '../../shared/input-field/input-field.component';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    InputFieldComponent
  ]
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  public loginForm!: FormGroup;
  public errorMessage?: string;

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
        next: (res: { token: string, userId: string }) => {
          localStorage.setItem("userId", res.userId);
          this.authService.accessToken$.next(res.token);
          this.router.navigate(['/books']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        }
      });
    }
    this.errorMessage = undefined;
  }
}
