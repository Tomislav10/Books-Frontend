import {inject, Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {catchError, Observable, of, switchMap, take} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private authService = inject(AuthService);
  private router = inject(Router);

  public canActivate = (): Observable<boolean> => this.authService.accessToken$.pipe(
    take(1),
    switchMap((accessToken?: string) => {
      return accessToken ? of(true) : this.authService.refresh().pipe(
        switchMap((res: { token?: string }) => {
          this.authService.accessToken$.next(res.token);
          return of(true);
        }),
        catchError(() => {
          this.router.navigate(['/login']);
          return of(false);
        })
      );
    })
  );
}
