import { ProfileService } from './../profile.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userData: User;
  editAutomatic: false;
  constructor(
    private http: HttpClient,
    private profileService: ProfileService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.userData = data;
      if (
        (data.bio === '' ||
          data.born === null ||
          data.city === '' ||
          data.country === '') &&
        window.location.href === 'http://localhost:4200/dashboard'
      ) {
        this.snackBar.open(
          'do you want to fill your profile details? ',
          'yes',
          {
            duration: 8000,
            panelClass: ['blue-snackbar'],
          }
        );
      }
    });
  }
}
