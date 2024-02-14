import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-ice-and-fire',
  templateUrl: './ice-and-fire.component.html',
  styleUrls: ['./ice-and-fire.component.scss']
})
export class IceAndFireComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.user().subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {
        console.log(err);
        alert('you are not Authenticated')
      }
    })
  }
}
