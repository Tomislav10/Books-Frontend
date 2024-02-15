import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public myForm: any;
  public errorMessage?: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.myForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      password_confirm: new FormControl('')
    });
  }

  public submitForm(): void {
    const { password, password_confirm } = this.myForm.value;

    this.myForm.markAsTouched();
    if (this.myForm.valid) {
      if (password === password_confirm) {
        this.authService.register(this.myForm.getRawValue()).subscribe({
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
