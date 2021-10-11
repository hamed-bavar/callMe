import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  show: boolean = window.innerWidth > 600 ? true : false;
  value: string = '';
  isAuth = false;
  constructor() {}
  ngOnDestroy() {}
}
