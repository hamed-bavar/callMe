import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FollowService {
  url = 'https://callme-back.herokuapp.com/api';
  constructor(private http: HttpClient) {}

  follow(id: number | string) {
    return this.http.post(this.url + '/request/' + id, {});
  }
  deleteReq(id: number | string) {
    return this.http.delete(this.url + '/request/' + id);
  }
}
