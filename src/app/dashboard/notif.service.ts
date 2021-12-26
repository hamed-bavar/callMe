import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Req } from '../shared/request.mode';

@Injectable({
  providedIn: 'root',
})
export class NotifService {
  url = 'https://callme-back2.herokuapp.com/api';

  constructor(private http: HttpClient) {}
  getNotifs() {
    return this.http.get<Req[]>(this.url + '/requests');
  }
  accept(id: string | number) {
    return this.http.get<any>(this.url + `/request/${id}/accept`);
  }
  decline(id: string | number) {
    return this.http.get<any>(this.url + `/request/${id}/decline`);
  }
}
