import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<User>('https://callme-back.herokuapp.com/api/profile');
  }
}
