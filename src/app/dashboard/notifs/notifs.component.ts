import { MatSnackBar } from '@angular/material/snack-bar';
import { Req } from './../../shared/request.mode';
import { NotifService } from './../notif.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-notifs',
  templateUrl: './notifs.component.html',
  styleUrls: ['./notifs.component.scss'],
})
export class NotifsComponent implements OnInit {
  notifs: Req[] = [];
  constructor(private notifService: NotifService, private sn: MatSnackBar) {
    this.notifService.getNotifs().subscribe((data) => {
      this.notifs = data;
    });
  }
  onAccept(id: string | number) {
    this.notifService.accept(id).subscribe((data) => {
      this.notifs = this.notifs.filter((notifs) => notifs.ID !== id);
      this.sn.open('The request was successfully approved', 'close', {
        duration: 3000,
      });
    });
  }
  onDecline(id: string | number) {
    this.notifService.decline(id).subscribe((data) => {
      this.notifs = this.notifs.filter((notifs) => notifs.ID !== id);
      console.log(this.notifs);
      this.sn.open('The request was successfully rejected', 'close', {
        duration: 3000,
      });
    });
  }
  ngOnInit(): void {}
}
