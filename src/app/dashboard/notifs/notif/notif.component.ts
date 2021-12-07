import { Req } from './../../../shared/request.mode';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.scss'],
})
export class NotifComponent implements OnInit {
  @Input() notif: Req;
  @Output() onAccept: EventEmitter<number | string> = new EventEmitter();
  @Output() onDecline: EventEmitter<number | string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  accept() {
    this.onAccept.emit(this.notif.ID);
  }
  decline() {
    this.onDecline.emit(this.notif.follower.ID);
  }
}
