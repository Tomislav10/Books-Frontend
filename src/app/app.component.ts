import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  logOut() {
    this.authService.logout().subscribe((res: any) => {
      this.authService.accessToken = undefined;
      this.router.navigate(['/login']);
    });
  }
}
