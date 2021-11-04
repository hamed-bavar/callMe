import { Subscription } from 'rxjs';
import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuth: boolean | null;
  constructor(private auth: AuthService) {
    this.auth.signedin$.subscribe((e) => (this.isAuth = e));
  }
  showSearchBar: boolean = window.innerWidth < 600 ? true : false;
  value: string = '';
  ngOnDestroy() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showSearchBar = event.target.innerWidth < 600 ? true : false;
  }
}
