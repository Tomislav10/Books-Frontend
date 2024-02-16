import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {catchError, Observable, switchMap, take, throwError} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private authService = inject(AuthService);

  private refresh = false;

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.accessToken$.pipe(
      take(1),
      switchMap((accessToken?: string) => {
        if (accessToken) {
          const request = req.clone({
            setHeaders: {
              Authorization: `Bearer ${accessToken}`
            }
          });

          return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
            if (err.status === 401 && !this.refresh) {
              this.refresh = true;
              return this.authService.refresh().pipe(
                switchMap((res: any) => {
                  this.authService.accessToken$.next(res.token);
                  return next.handle(request.clone({
                    setHeaders: {
                      Authorization: `Bearer ${accessToken}`
                    }
                  }));
                })
              );
            }

            this.refresh = false;
            return throwError(() => err);
          }));
        } else {
          return next.handle(req);
        }
      })
    );
  }
}
