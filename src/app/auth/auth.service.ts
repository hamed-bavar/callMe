import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserCredentials } from '../shared/types.model';
import { HttpClient } from '@angular/common/http';
import { SignedinResponse } from '../shared/types.model';
import { SignupResponse } from '../shared/types.model';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Url = '/';
  signedin$ = new BehaviorSubject<boolean | null>(null);
  constructor(private http: HttpClient) {}

  signup(credentials: UserCredentials) {
    return this.http
      .post<SignupResponse>(`${this.Url}/auth/signup`, credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }
  signin(credentials: UserCredentials) {
    return this.http
      .post<SignupResponse>(`${this.Url}/auth/signip`, credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }
  checkAuth() {
    this.signedin$.next(true);
  }
  signout() {}
}
