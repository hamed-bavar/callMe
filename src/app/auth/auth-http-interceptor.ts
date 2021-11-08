import { map, skipWhile, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  constructor(private AuthService: AuthService) {}
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      httpRequest.url.includes('register') ||
      httpRequest.url.includes('login')
    ) {
      return next.handle(httpRequest);
    }
    return this.AuthService.token$.pipe(
      tap((value) => {
        console.log(value, 'value');
      }),
      <any>skipWhile((value) => value === null),
      map((token: string) => {
        return httpRequest.clone({
          headers: httpRequest.headers.set('Authorization', 'Bearer ' + token),
        });
      }),
      switchMap((req) => next.handle(req))
    );
  }
}
