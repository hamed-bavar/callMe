import { Comment } from './../../shared/post.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
  commentValue: string = '';
  @Input() comments: Comment[] = [];
  @Input() postId: number | string;
  pending: boolean = false;
  constructor(
    private commentService: CommentService,
    private sb: MatSnackBar
  ) {}

  ngOnInit(): void {}
  onSendComment() {
    if (this.pending === true) return;
    this.pending = true;
    if (this.commentValue.trim() === '') {
      return;
    }
    this.commentService
      .add(this.postId, { text: this.commentValue })
      .subscribe((e) => {
        this.commentValue = '';
        const newCommentsList = [e, ...this.comments];
        this.comments = newCommentsList;
        this.sb.open('Comment added', 'close', { duration: 2000 });
        this.pending = false;
      });
  }
  changed($event: any) {
    this.commentValue = $event.target.value;
  }
  deleteComment(id: number | string) {
    this.comments = this.comments.filter((e) => e.ID !== id);
    this.sb.open('Comment removed ', 'close', { duration: 1000 });
    this.commentService.remove(id).subscribe(() => {});
  }
}
