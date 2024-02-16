import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public accessToken$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

  constructor(
    private http: HttpClient
  ) {
  }

  public register(body: any): Observable<any> {
    return this.http.post(`${environment.api}/register`, body);
  }

  public login(body: any): Observable<any> {
    return this.http.post(`${environment.api}/login`, body, {withCredentials: true});
  }

  public user(): Observable<any> {
    return this.http.get(`${environment.api}/user`);
  }

  public refresh(): Observable<any> {
    return this.http.post(`${environment.api}/refresh`, {}, {withCredentials: true});
  }

  public logout(): Observable<any> {


    return this.http.post(`${environment.api}/logout`, {}, {withCredentials: true});
  }
}
