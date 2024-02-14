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

  constructor(
    private router: Router,
    private authService: AuthService

  ) {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  submitForm() {
    console.log('aaaaa');
    console.log(this.myForm.valid);
    console.log(this.myForm);
    /*this.authService.login(this.myForm.getRawValue()).subscribe((res: any) => {
      this.authService.accessToken = res.token;
      this.router.navigate(['/home']);
    });*/
  }
}
