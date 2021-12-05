import { SearchService } from './../../search.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchResult } from 'src/app/shared/user.model';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  @Output() closeResults = new EventEmitter();
  results$: Subscription;
  searchResults: SearchResult[] = [];
  constructor(private searchService: SearchService) {
    this.results$ = this.searchService.results$.subscribe((e) => {
      this.searchResults = e;
    });
  }
  ngOnInit(): void {}

  onClose() {
    this.closeResults.emit();
  }
  ngOnDestroy() {
    this.results$.unsubscribe();
  }
}
