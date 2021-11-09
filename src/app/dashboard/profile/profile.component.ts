import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() followers: number = 0; //
  @Input() following: number = 0; //
  @Input() username: string = 'hamed'; //
  @Input() avatar: string; //
  @Input() bio: string =
    'Learner at home ,React enthusiast,Kicked out of the University but do not intend to become the next Bill Gates Money with wings  ';
  @Input() born: Date | null = new Date();
  @Input() city: string = 'guilan';
  @Input() country: string = 'iran';
  @Input() created_at: Date;
  isMobile: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 650 ? true : false;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 650 ? true : false;
  }
}
