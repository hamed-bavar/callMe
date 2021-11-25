import { SearchService } from './../search.service';
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
  showSearchResults: boolean = false;
  constructor(private auth: AuthService, private searchService: SearchService) {
    this.auth.signedin$.subscribe((e) => (this.isAuth = e));
  }
  showSearchBar: boolean = window.innerWidth < 600 ? true : false;
  value: string = '';
  ngOnDestroy() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showSearchBar = window.innerWidth < 600 ? true : false;
  }
  focusSearchInput() {
    this.showSearchResults = true;
  }
  changeText($event: any) {
    this.searchService.search($event.target.value);
  }
}
