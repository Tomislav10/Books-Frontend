import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {catchError, Observable, of, switchMap} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate = (): Observable<boolean> => this.authService.accessToken ? of(true)
    : this.authService.refresh().pipe(
      switchMap((res: { token?: string; }) => {
        this.authService.isLogged$.next(true);
        this.authService.accessToken = res.token;
        return of(true);
      }),
      catchError(() => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
}
