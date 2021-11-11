import { Subscription } from 'rxjs';
import { ProfileService } from './../profile.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
        if (event.url === '/dashboard') {
          this.loading = true;
          this.profileService.getProfile().subscribe((data) => {
            console.log('data i want', data);
            this.loading = false;
            this.userData = data;
          });
        }
      }
    });
  }

  ngOnInit(): void {
    // this.profileService.getProfile().subscribe((data) => {
    //   this.userData = data;
    //   if (
    //     (data.bio === '' ||
    //       data.born === null ||
    //       data.city === '' ||
    //       data.country === '') &&
    //     window.location.href === 'http://localhost:4200/dashboard'
    //   ) {
    //   }
    // });
  }
  ngOndestroy() {
    this.subRoute.unsubscribe();
  }
}
