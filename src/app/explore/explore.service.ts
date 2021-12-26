import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thumbnail } from '../shared/post.model';

@Injectable({
  providedIn: 'root',
})
export class ExploreService {
  url = 'https://callme-back2.herokuapp.com/api';
  constructor(private http: HttpClient) {}

  getExploreNthPage(page: number) {
    return this.http.get<Thumbnail[]>(
      this.url + `/explore?page=${page}&resultsPerPage=20`
    );
  }
}
