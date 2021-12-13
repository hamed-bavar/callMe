import { Thumbnail } from './../shared/post.model';
import { ExploreService } from './explore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  arr = new Array(10);
  currentPage: number = 1;
  isEnded = false;
  currentData: Thumbnail[] = [];

  options = {
    root: null,
    threshold: 1,
  };
  constructor(private exploreService: ExploreService) {}

  changePage = () => {
    let target: any = document.querySelector('#listItem');
    const rect = target.getBoundingClientRect();
    const isInViewport =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    if (isInViewport && !this.isEnded) {
      this.geData();
    }
  };
  ngOnInit(): void {
    let observer = new IntersectionObserver(this.changePage, this.options);
    let target: any = document.querySelector('#listItem');
    observer.observe(target);
  }
  geData() {
    this.exploreService.getExploreNthPage(this.currentPage).subscribe((res) => {
      console.log(res, 'this is res');
      this.currentData = [...this.currentData.concat(res)];
      if (res.length === 0) {
        this.isEnded = true;
      } else {
        this.currentPage++;
      }
    });
  }
}
