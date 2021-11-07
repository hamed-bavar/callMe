import { LoadingService } from './../loading.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  loading: Subject<boolean>;
  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loading = this.loadingService.loading;
  }
}
