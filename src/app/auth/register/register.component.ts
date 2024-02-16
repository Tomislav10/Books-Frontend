import {NgIf} from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Router, RouterLink} from '@angular/router';
import {InputFieldComponent} from '../../shared/input-field/input-field.component';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    FormsModule,
    MatButtonModule,
    InputFieldComponent,
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    MatCardModule
  ],
  standalone: true
})
export class RegisterComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  public registerForm!: FormGroup;
  public errorMessage?: string;

  public ngOnInit(): void {
    this.registerForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      password_confirm: new FormControl('')
    });
  }

  public submitForm(): void {
    const {password, password_confirm} = this.registerForm.value;

    this.registerForm.markAsTouched();
    if (this.registerForm.valid) {
      if (password === password_confirm) {
        this.authService.register(this.registerForm.getRawValue()).subscribe({
          next: () => {
            this.router.navigate(['/login']);
          },
          error: (err) => {
            this.errorMessage = err.error.message;
          }
        });
      } else {
        this.errorMessage = 'Password and Confirm password are not same!'
      }
    } else {
      this.errorMessage = undefined;
    }
  }
}
