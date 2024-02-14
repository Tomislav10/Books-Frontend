import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  refresh = false;

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.accessToken;

    if(accessToken){
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
              this.authService.accessToken = res.token;
              return next.handle(request.clone({
                setHeaders: {
                  Authorization: `Bearer ${accessToken}`
                }
              }));
            })
          )
        }

        this.refresh = false;
        return throwError(() => err);
      }))
    }

    return next.handle(req)
  }
}
