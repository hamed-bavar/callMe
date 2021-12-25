import { LoadingService } from './../shared/loading.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Error } from '../shared/register.model';

@Injectable()
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private ls: LoadingService,
    private sb: MatSnackBar
  ) {}
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(
      catchError((e: Error) => {
        this.ls.onSetLoading();
        if (e.status === 401) {
          if (!this.router.routerState.snapshot.url.includes('register')) {
            this.authService.signout();
          }
        } else {
          if (!e.error.description)
            e.error.description = 'someThing went wrong';
          this.sb.open(e.error.description, 'close', { duration: 2000 });
        }
        return throwError(e);
      })
    );
  }
}
