import { ProfileService } from './../profile.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userData: User;
  constructor(
    private http: HttpClient,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.userData = data;
      console.log(data);
    });
  }
}
