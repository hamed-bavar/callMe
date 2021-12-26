import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
interface AvatarInterface {
  avatar: string;
}
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url = 'https://callme-back2.herokuapp.com/api';
  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<User>(this.url + '/profile');
  }
  editProfile(key: string, value: string) {
    let object: any = {};
    object[key] = value;
    if (key === 'born') object[key] = new Date(value);
    return this.http.patch(this.url + '/profile', object);
  }
  editImage(file: any) {
    let formData = new FormData();
    formData.append('avatar', file);
    return this.http.put<AvatarInterface>(this.url + '/avatar', formData);
  }
  getUserProfile(id: string | number) {
    return this.http.get(this.url + '/profile/' + id);
  }
}
