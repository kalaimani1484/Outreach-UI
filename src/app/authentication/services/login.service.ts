import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { LoginDetails } from '../Interfaces/loginDetails'
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  UserName: string;
  IsLoggedIn: boolean;
  Authentication_Details: LoginDetails;
  Token: string;
  Expires: any;
  private HeaderVisibility: BehaviorSubject<boolean>;
  public currentUserSubject: BehaviorSubject<LoginDetails>;
  public currentUser: Observable<LoginDetails>;

  constructor(private http: HttpClient, public _router: Router) {
    this.HeaderVisibility = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<LoginDetails>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  authenticate(username, password): Observable<LoginDetails> {
    var UserDetails = { username: username, password: password };
    return this.http.post<LoginDetails>(`${environment.AuthApiUrl}/api/auth/login`, UserDetails);
  }
  
  public get currentUserValue(): LoginDetails {
    return this.currentUserSubject.value;
  }

  SetLoalStorageValue(Key, Value) {
    console.log(Key, Value);
    localStorage.setItem(Key, Value);
  }

  GetLoalStorageValue(Key) {
    return localStorage.getItem(Key);
  }
  
  login() {
    this.Expires = new Date(this.GetLoalStorageValue("expires"));
    
    this.Token = this.GetLoalStorageValue("access_token");
    let currentTime = new Date();
    if ((this.Token != null && this.Token.trim() != '') && (this.Expires != undefined
      && this.Expires.getDate() >= currentTime.getDate()
      || this.Expires.getHours() >= currentTime.getHours())
    ) {
      this.IsLoggedIn = true;
      this.setHeaderValue(true);
      return true;
    }
    else {
      this.IsLoggedIn = false;
      this.setHeaderValue(false);
      return false;
    }

  }
  logout() {
    this.currentUserSubject.next(null);
    this.RemoveLocalStorageItems();
    this.IsLoggedIn = false;
    this.setHeaderValue(false);
  }
  RemoveLocalStorageItems() {
    console.log("cleared")
    localStorage.removeItem('currentUser');
    localStorage.removeItem('access_token');
    localStorage.removeItem('Id');
    localStorage.removeItem('expires');
    localStorage.removeItem('role');
  }
  setHeaderValue(newValue): void {
    this.HeaderVisibility.next(newValue);
  }
  getHeaderValue(): Observable<boolean> {
    return this.HeaderVisibility.asObservable();
  }

  getAdminUserValue(): Observable<LoginDetails> {
    return this.currentUserSubject.asObservable();
  }
}
