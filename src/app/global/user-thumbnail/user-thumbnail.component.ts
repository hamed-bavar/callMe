import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-thumbnail',
  templateUrl: './user-thumbnail.component.html',
  styleUrls: ['./user-thumbnail.component.scss'],
})
export class UserThumbnailComponent implements OnInit {
  @Input() username: string;
  @Input() id: number;
  @Input() avatar: string;
  @Input() bio: string;
  constructor() {}

  ngOnInit(): void {}
}
