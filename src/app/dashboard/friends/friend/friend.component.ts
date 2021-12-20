import { Router } from '@angular/router';
import { User } from './../../../shared/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent implements OnInit {
  @Input() user: User;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  changePage() {
    this.router.navigate(['/user/' + this.user.ID]);
  }
}
