import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isVisible$ = this.authService.isLogged$;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  public logOut(): void {
    this.authService.logout().subscribe(() => {
      this.authService.accessToken = undefined;
      this.authService.isLogged$.next(false);
      this.router.navigate(['/login']);
    });
  }
}
