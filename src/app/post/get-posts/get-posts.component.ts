import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
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
  constructor(private postService: PostService, private snack: MatSnackBar) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (res) => {
        this.loading = false;
        this.thumbnails = res;
        console.log(res);
      },
      (err) => {
        this.snack.open(err.error.description, 'close', {});
      }
    );
  }
}
