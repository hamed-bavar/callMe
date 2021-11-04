import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, throwError } from 'rxjs';
import { UserCredentials } from '../shared/types.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignedinResponse } from '../shared/types.model';
import { SignupResponse } from '../shared/types.model';
import { catchError, tap } from 'rxjs/operators';
import { LocalstorageService } from '../shared/localstorage.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://callme-back.herokuapp.com/api';
  signedin$ = new BehaviorSubject<boolean | null>(null);
  constructor(
    private http: HttpClient,
    private locStorage: LocalstorageService,
    private router: Router
  ) {}
  doAuth(credentials: UserCredentials, type: boolean) {
    let url = this.url;
    url += type === true ? '/register' : 'login';
    return this.http.post<SignupResponse>(`${url}`, credentials).pipe(
      catchError((e) => {
        this.signedin$.next(false);
        console.log('error', e);
        return throwError('please check your password or use another email');
      }),
      tap((req) => {
        console.log('not error', req);
        this.locStorage.set('token', req.token);
        this.signedin$.next(true);
        this.router.navigateByUrl('/');
      })
    );
  }
  checkAuth() {
    const token = this.locStorage.get('token');
    token ? this.signedin$.next(true) : this.signedin$.next(false);
  }
  signout() {
    this.locStorage.remove('token');
    this.signedin$.next(false);
  }
}
