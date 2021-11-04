import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, mapTo, skipWhile, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.signedin$.pipe(
      skipWhile<any>((value) => value === null),
      take(1),
      map((value) => !value),
      tap((value) => {
        //if value was true that means we are not signedin yet so user will be able to see signedin page
        //if value was false that means we are  signedin  so user should not
        if (!value) {
          this.router.navigateByUrl('/');
        }
      })
    );
  }
}
