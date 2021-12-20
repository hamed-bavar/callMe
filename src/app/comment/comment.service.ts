import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../shared/post.model';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  url = 'https://callme-back.herokuapp.com/api';
  constructor(private http: HttpClient) {}
  add(id: number | string, body: { text: string }) {
    return this.http.post<Comment>(`${this.url}/comment/${id}`, body);
  }
  remove(id: number | string) {
    return this.http.delete(`${this.url}/comment/${id}`);
  }
}
