import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, NgIf, AsyncPipe],
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  public isVisible$ = this.authService.accessToken$;

  public logOut(): void {
    this.authService.logout().subscribe(() => {
      this.authService.accessToken$.next(undefined);
      this.router.navigate(['/login']);
    });
  }
}
