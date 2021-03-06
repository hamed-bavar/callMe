import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from './../post.service';
import { Component, OnInit, Input } from '@angular/core';
import { Thumbnail } from '../../shared/post.model';
@Component({
  selector: 'app-get-posts',
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.scss'],
})
export class GetPostsComponent implements OnInit {
  skeletons = new Array(3);
  loading: boolean = true;
  thumbnails: Thumbnail[] = [];
  subRoute: Subscription;
  canDelete = false;
  @Input() userId: string | number;
  @Input() normalMode: boolean = true;
  constructor(
    private postService: PostService,
    private snack: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postService.getPosts(this.userId).subscribe((res) => {
      this.loading = false;
      this.thumbnails = res;
    });
  }
  onDeletePost(id: number) {
    this.thumbnails = this.thumbnails.filter(
      (thumbnail) => thumbnail.ID !== id
    );
    this.postService.deletePost(id).subscribe((res) => {});
  }
  onGoToPost(id: any) {
    this.normalMode === true
      ? this.router.navigateByUrl(`/dashboard/${id}?edit=true`)
      : this.router.navigateByUrl(`/post/${id}?edit=false`);
  }
}
