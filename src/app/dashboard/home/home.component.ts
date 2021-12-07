import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileService } from 'src/app/user/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userData: User;
  loading: boolean = false;
  subRoute: Subscription;
  constructor(
    private http: HttpClient,
    private profileService: ProfileService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {
    this.subRoute = this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('/dashboard')) {
          this.loading = true;
          this.profileService.getProfile().subscribe((data) => {
            this.loading = false;
            this.userData = data;
          });
        }
      }
    });
  }
  ngOnInit(): void {}
  ngOndestroy() {
    this.subRoute.unsubscribe();
  }
}
