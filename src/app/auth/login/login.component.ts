import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  submitForm() {
    this.authService.login(this.myForm.getRawValue()).subscribe((res: any) => {
      console.log('----login----');
      console.log(res);
      console.log('----login----');
      this.authService.accessToken = res.token;
      this.router.navigate(['/home']);
    });
  }
}
