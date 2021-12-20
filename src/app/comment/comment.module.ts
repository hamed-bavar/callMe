import { MatIconModule } from '@angular/material/icon';
import { GlobalModule } from './../global/global.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { SingleCommentComponent } from './single-comment/single-comment.component';

@NgModule({
  declarations: [CommentListComponent, SingleCommentComponent],
  imports: [CommonModule, FormsModule, GlobalModule, MatIconModule],
  exports: [CommentListComponent],
})
export class CommentModule {}
