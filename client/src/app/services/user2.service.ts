import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class User2Service {
  constructor(private http: Http) { }
  handleError(e) {
    return Observable.throw(e.json().message);
  }
  signup(user) {
    return this.http.post(`http://localhost:3000/api/user/signup`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }
  login(user) {
    return this.http.post(`http://localhost:3000/api/user/login`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }
  logout() {
    return this.http.post(`http://localhost:3000/api/user/logout`, {}, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }
  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/user/loggedin`, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }
}