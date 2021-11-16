import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { PostRoutingModule } from './post-routing.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { GetPostsComponent } from './get-posts/get-posts.component';
import { ImageUploaderComponent } from './create-post/image-uploader/image-uploader.component';
import { ExpansionPanelComponent } from './create-post/expansion-panel/expansion-panel.component';
@NgModule({
  declarations: [
    CreatePostComponent,
    GetPostsComponent,
    ImageUploaderComponent,
    ExpansionPanelComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
  ],
  exports: [CreatePostComponent, GetPostsComponent],
})
export class PostModule {}
