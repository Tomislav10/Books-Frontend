import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myForm: any;

  ngOnInit() {
    this.myForm = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      cpassword: new FormControl('')
    });
  }

  submitForm() {
    console.log('fname', this.myForm.value.fname);
    console.log('lname', this.myForm.value.lname);
    console.log('email', this.myForm.value.email);
    console.log('password', this.myForm.value.password);
    console.log('cpassword', this.myForm.value.cpassword);
  }
}
