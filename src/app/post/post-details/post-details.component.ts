import { PostDetails } from './../../shared/post.model';
import { Subscription } from 'rxjs';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  subRoute: Subscription;
  editMode: boolean = false;
  postDetails: PostDetails;
  loading: boolean = true;
  constructor(private post: PostService, private route: Router) {
    this.subRoute = this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let idParam = this.route.url.split('/')[2].split('?');
        const id = idParam[0];
        this.editMode = idParam[1] === 'edit=false' ? false : true;
        this.post.getPostDetails(id).subscribe((res) => {
          this.postDetails = res;
          this.loading = false;
          console.log(this.postDetails, 'details');
        });
      }
    });
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subRoute.unsubscribe();
  }
  toggleLike() {
    const isLike = this.postDetails.HasLiked === true ? 0 : 1;
    this.postDetails.HasLiked = !this.postDetails.HasLiked;
    this.postDetails.HasLiked === true
      ? this.postDetails.Likes++
      : this.postDetails.Likes--;
    this.post.toggleLike(this.postDetails.ID, isLike).subscribe((e) => e);
  }
}
