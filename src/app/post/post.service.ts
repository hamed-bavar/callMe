import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface PostData {
  title: string;
  description: string;
  photos: any[];
  private: boolean;
  keywords: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'https://callme-back.herokuapp.com/api';
  constructor(private http: HttpClient) {}

  createPost(postData: PostData) {
    return this.http.post(this.url + '/post', postData);
  }
}
