import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostData, Thumbnail } from '../shared/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'https://callme-back.herokuapp.com/api';
  constructor(private http: HttpClient) {}

  createPost(postData: PostData) {
    return this.http.post(this.url + '/post', postData);
  }
  getPosts() {
    return this.http.get<Thumbnail[]>(this.url + '/posts');
  }
}
