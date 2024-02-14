import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {catchError, Observable, of, switchMap, tap, throwError} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    if (this.authService.accessToken) {
      return of(true);
    } else {
      return this.authService.refresh().pipe(
        switchMap((res: any) => {
          this.authService.accessToken = res.token;

          return of(true);
        }),
        catchError(() => {
          this.router.navigate(['/login']);
          return of(false);
        })
      );
    }
  }
}
