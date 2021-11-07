import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss'],
})
export class BottomNavigationComponent implements OnInit {
  isAuth: boolean | null;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.signedin$.subscribe((e) => (this.isAuth = e));
  }
}
