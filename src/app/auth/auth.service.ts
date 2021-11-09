import { LoadingService } from './../shared/loading.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { UserCredentials, Error } from '../shared/register.model';
import { HttpClient } from '@angular/common/http';
import { SignupResponse } from '../shared/register.model';
import { catchError, tap } from 'rxjs/operators';
import { LocalstorageService } from '../shared/localstorage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://callme-back.herokuapp.com/api';
  signedin$ = new BehaviorSubject<boolean | null>(null);
  token$ = new BehaviorSubject<string | null>(null);
  constructor(
    private http: HttpClient,
    private locStorage: LocalstorageService,
    private router: Router,
    private loadingService: LoadingService
  ) {}
  doAuth(credentials: UserCredentials, type: boolean) {
    let url = this.url;
    url += type === true ? '/register' : 'login';
    this.loadingService.setLoading();
    return this.http.post<SignupResponse>(`${url}`, credentials).pipe(
      catchError((e: Error) => {
        this.signedin$.next(false);
        this.loadingService.onSetLoading();
        return throwError(e.error.description);
      }),
      tap((res) => {
        this.locStorage.set('token', res.token);
        this.signedin$.next(true);
        this.token$.next(res.token);
        this.loadingService.onSetLoading();
        this.router.navigateByUrl('/');
      })
    );
  }
  checkAuth() {
    const token = this.locStorage.get('token');
    this.token$.next(token);
    token ? this.signedin$.next(true) : this.signedin$.next(false);
  }
  signout() {
    this.locStorage.remove('token');
    this.signedin$.next(false);
    this.token$.next(null);
  }
}
