import { FollowService } from './../follow.service';
import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private followService: FollowService
  ) {
    this.loading = true;
    this.router.params.pipe().subscribe((params) => {
      this.userId = params.id;
      this.profileService.getUserProfile(params.id).subscribe((res: any) => {
        this.userData = res;
        this.loading = false;
      });
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
    }
  }
  ngOnInit(): void {}
}
