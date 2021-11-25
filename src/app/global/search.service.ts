import { HttpClient } from '@angular/common/http';
import {
  switchMap,
  debounceTime,
  skip,
  filter,
  distinctUntilChanged,
} from 'rxjs/operators';
import { SearchResult } from '../shared/user.model';
import { Injectable } from '@angular/core';
import { of, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  url = 'https://callme-back.herokuapp.com/api';
  searchText$ = new Subject();
  results$ = new Observable<SearchResult[]>();
  constructor(private http: HttpClient) {
    this.results$ = this.searchText$.pipe(
      filter((text) => text !== ''),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((text) =>
        this.http.get<SearchResult[]>(`${this.url}/search?q=${text}`)
      )
    );
  }

  search(text: string) {
    this.searchText$.next(text);
  }
}
