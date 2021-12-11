import { User } from './../../shared/user.model';
import { FollowService } from './../../user/follow.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  subRoute: Subscription;
  users: User[] = [];
  type: boolean = false;
  constructor(
    private activateRoute: ActivatedRoute,
    private route: Router,
    private fs: FollowService
  ) {
    this.subRoute = this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('/followers')) {
          this.type = false;
          this.fs.getFollowers().subscribe((data) => {
            this.users = data;
            console.log(data);
          });
        } else {
          this.fs.getFollowings().subscribe((data) => {
            this.type = true;
            this.users = data;
            console.log(data);
          });
        }
      }
    });
  }

  ngOnInit(): void {
    console.log('initializing friends');
  }
  ngOnDestroy() {
    this.subRoute.unsubscribe();
  }
}
