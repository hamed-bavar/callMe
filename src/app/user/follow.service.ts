import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class FollowService {
  url = 'https://callme-back2.herokuapp.com/api';
  constructor(private http: HttpClient) {}

  follow(id: number | string) {
    return this.http.post(this.url + '/request/' + id, {});
  }
  deleteReq(id: number | string) {
    return this.http.delete(this.url + '/request/' + id);
  }
  unfollow(id: number | string) {
    return this.http.get(this.url + '/unfollow/' + id);
  }
  getFollowers() {
    return this.http.get<User[]>(this.url + '/followers');
  }
  getFollowings() {
    return this.http.get<User[]>(this.url + '/followings');
  }
}
