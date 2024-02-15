import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public accessToken?: string;
  public isLogged$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private http: HttpClient
  ) {
  }

  public register(body: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/register', body);
  }

  public login(body: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/login', body, {withCredentials: true});
  }

  public user(): Observable<any> {
    return this.http.get('http://localhost:8000/api/user');
  }

  public refresh(): Observable<any> {
    return this.http.post('http://localhost:8000/api/refresh', {}, {withCredentials: true});
  }

  public logout(): Observable<any> {
    return this.http.post('http://localhost:8000/api/logout', {}, {withCredentials: true});
  }
}
