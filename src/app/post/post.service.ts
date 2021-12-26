import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PostData, PostDetails, Thumbnail } from '../shared/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'https://callme-back2.herokuapp.com/api';
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
  getPostDetails(id: string) {
    return this.http.get<PostDetails>(this.url + '/post/' + id).pipe(
      map((res, index) => {
        const newRes = { ...res };
        newRes.Photos = res.Photos.map((e) => e.path);
        return newRes;
      })
    );
  }
  toggleLike(id: string | number, isLike: number) {
    return this.http.post(
      this.url + '/like/' + id + '?like=' + isLike.toString(),
      {}
    );
  }
  updatePost(postData: any, id: number | string) {
    console.log(postData, 'postData');
    return this.http.put(this.url + '/post/' + id, postData);
  }
}
