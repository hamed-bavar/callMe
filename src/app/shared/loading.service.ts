import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading = new Subject<boolean>();
  constructor() {}
  setLoading() {
    this.loading.next(true);
  }
  onSetLoading() {
    this.loading.next(false);
  }
}
