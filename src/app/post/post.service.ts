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
    let formData = new FormData();
    formData.append('title', postData.title);
    formData.append('description', postData.description);
    formData.append('private', postData.private.toString());
    formData.append('keywords', postData.keywords);
    for (let photo of postData.photos) {
      formData.append('photos', photo);
    }
    return this.http.post(this.url + '/post', formData);
  }
  getPosts(id: string | number = '') {
    return this.http.get<Thumbnail[]>(this.url + '/posts/' + id);
  }
  deletePost(id: string | number) {
    return this.http.delete<any>(this.url + '/post/' + id);
  }
  goToPost(id: string) {
    return this.http.get<PostData>(this.url + '/post/' + id);
  }
}
