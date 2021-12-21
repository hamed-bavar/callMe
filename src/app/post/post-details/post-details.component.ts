import { MatSnackBar } from '@angular/material/snack-bar';
import { PostDetails } from './../../shared/post.model';
import { Subscription } from 'rxjs';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CustomDialogComponent } from 'src/app/shared/custom-dialog/custom-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
  editType: 'editT' | 'editC' | 'editK' = 'editT';
  constructor(
    private post: PostService,
    private route: Router,
    public dialog: MatDialog,
    private sb: MatSnackBar
  ) {
    this.subRoute = this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let idParam = this.route.url.split('/')[2].split('?');
        const id = idParam[0];
        console.log(idParam[1], 'heck');
        this.editMode = idParam[1] === 'edit=false' ? false : true;
        this.post.getPostDetails(id).subscribe((res) => {
          this.postDetails = res;
          console.log(res, 'post details');
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
  scrollTo() {
    document
      .getElementById('comment-section')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
  toggleLike() {
    const isLike = this.postDetails.HasLiked === true ? 0 : 1;
    this.postDetails.HasLiked = !this.postDetails.HasLiked;
    this.postDetails.HasLiked === true
      ? this.postDetails.Likes++
      : this.postDetails.Likes--;
    this.post.toggleLike(this.postDetails.ID, isLike).subscribe((e) => e);
  }
  openDialog(type: 'editT' | 'editC' | 'editK'): void {
    this.editType = type;
    let data = {};
    data =
      type === 'editT'
        ? {
            explanation: 'Are you sure you want to edit this title?',
            value: this.postDetails.Title,
          }
        : type === 'editC'
        ? {
            explanation: 'Are you sure you edit this caption?',
            value: this.postDetails.Description,
          }
        : {
            explanation: 'Are you sure you edit this keywords?',
            value: this.postDetails.Keywords,
          };
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: '280px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      let payload = {};
      if (!result || result === '') {
        return;
      }
      payload =
        this.editType === 'editT'
          ? { title: result }
          : this.editType === 'editC'
          ? { description: result }
          : { keywords: result };
      this.postDetails.Title =
        this.editType === 'editT' ? result : this.postDetails.Title;
      this.postDetails.Description =
        this.editType === 'editC' ? result : this.postDetails.Description;
      this.postDetails.Keywords =
        this.editType === 'editK' ? result : this.postDetails.Keywords;
      this.sb.open('Post updated successfully', 'close', { duration: 2000 });
      this.post.updatePost(payload, this.postDetails.ID).subscribe((e) => {});
    });
  }
}
