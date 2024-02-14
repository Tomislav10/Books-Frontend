import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken = '';

  constructor(
    private http: HttpClient
  ) {
  }

  register(body: any) {
    return this.http.post('http://localhost:8000/api/register', body);
  }

  login(body: any) {
    return this.http.post('http://localhost:8000/api/login', body, {withCredentials: true});
  }

  user() {
    return this.http.get('http://localhost:8000/api/user');
  }

  refresh() {
    return this.http.post('http://localhost:8000/api/refresh', {}, {withCredentials: true});
  }
}
