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
  myForm: any;
  errorMessage?: string;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  submitForm() {
    this.myForm.markAsTouched();
    if (this.myForm.valid) {
      this.authService.login(this.myForm.getRawValue()).subscribe({
        next: (res: any) => {
          this.authService.accessToken = res.token;
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
