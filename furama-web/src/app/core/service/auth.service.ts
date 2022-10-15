import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {User} from "../../data/model/user";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {Login} from "../../data/model/login";

interface LoginContextInterface {
  username: string;
  password: string;
  token: string;
}

const defaultUser = {
  username: 'quoc',
  password: '123',
  token: '123'
};

const credentialsKey = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // login(loginContext: LoginContextInterface): Observable<User> {
  //   const isDefaultUser =
  //     loginContext.username === defaultUser.username &&
  //     loginContext.password === defaultUser.password;
  //   setTimeout(e=> console.log('delay...'), 8000);
  //   console.log('a');
  //   if (isDefaultUser) {
  //     return of(defaultUser);
  //   }
  //
  //   return throwError('Invalid username or password');
  // }

  login(loginData: Login): Observable<any> {
    const href = `${ environment.login }`;
    return this.http.post<any>(href, loginData).pipe(
      tap(
        function (data) {
          if (data.status === 'success') {
            const storage = loginData.remember ? localStorage : sessionStorage;
            storage.setItem(credentialsKey, JSON.stringify(data));
          }
          return data;
        }
      )
    );
  }

  logout(): Observable<boolean> {
    return of(false);
  }

  getToken() {
    const savedCredentials = this.getUser();
    return savedCredentials && savedCredentials['token'];
  }


  private getUser() {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    if(savedCredentials){
      return JSON.parse(savedCredentials);
    }
  }
}
