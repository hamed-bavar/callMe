import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/shared/post.model';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.scss'],
})
export class SingleCommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() deleteComment = new EventEmitter<string | number>();
  constructor() {}

  ngOnInit(): void {}
  onRemoveComment() {
    this.deleteComment.emit(this.comment.ID);
  }
}
