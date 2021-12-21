import { FollowService } from './../follow.service';
import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userData: User;
  loading: boolean = true;
  userId: number | string;
  constructor(
    private router: ActivatedRoute,
    private profileService: ProfileService,
    private followService: FollowService,
    private route: Router
  ) {
    this.loading = true;
    this.router.params.subscribe((params) => {
      this.userId = params.id;
      if (
        window.location.href.includes('user') &&
        params.id == localStorage.getItem('userID')
      ) {
        this.route.navigateByUrl(`/dashboard`);
      } else {
        this.profileService.getUserProfile(params.id).subscribe((res: any) => {
          this.userData = res;
          this.loading = false;
        });
      }
    });
  }
  setFollowState(state: string) {
    if (state === 'follow') {
      this.followService.follow(this.userId).subscribe((res: any) => {
        this.userData.following_status = 'requested';
      });
    } else if (state === 'cancelRequest') {
      this.followService.deleteReq(this.userId).subscribe((res: any) => {
        this.userData.following_status = 'not_following';
      });
    } else {
      this.followService.unfollow(this.userId).subscribe((res: any) => {
        this.userData.following_status = 'not_following';
      });
    }
  }
  ngOnInit(): void {}
}
