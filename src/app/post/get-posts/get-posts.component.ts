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
  @Input() userId: string | number;
  @Input() normalMode: boolean = true;
  constructor(private postService: PostService, private snack: MatSnackBar) {}

  ngOnInit(): void {
    this.postService.getPosts(this.userId).subscribe(
      (res) => {
        this.loading = false;
        this.thumbnails = res;
      },
      (err) => {
        this.snack.open(err.error.description, 'close', {});
      }
    );
  }
  onDeletePost(id: number) {
    this.postService.deletePost(id).subscribe((res) => {
      this.thumbnails = this.thumbnails.filter(
        (thumbnail) => thumbnail.ID !== id
      );
    });
  }
  onGoToPost($event: any) {}
}
