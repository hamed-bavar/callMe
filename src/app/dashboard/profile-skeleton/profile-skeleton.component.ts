import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-skeleton',
  templateUrl: './profile-skeleton.component.html',
  styleUrls: ['./profile-skeleton.component.scss'],
})
export class ProfileSkeletonComponent implements OnInit {
  @Input() show: any;
  constructor() {}

  ngOnInit(): void {}
}
