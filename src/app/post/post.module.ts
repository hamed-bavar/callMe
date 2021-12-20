import { CommentModule } from './../comment/comment.module';
import { GlobalModule } from './../global/global.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { PostRoutingModule } from './post-routing.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { GetPostsComponent } from './get-posts/get-posts.component';
import { ImageUploaderComponent } from './create-post/image-uploader/image-uploader.component';
import { SwiperModule } from 'swiper/angular';
import { SafeResourceUrlPipe } from './safe-resource-url.pipe';
import { SliderComponent } from './create-post/slider/slider.component';
import { CreatePostInputsComponent } from './create-post/create-post-inputs/create-post-inputs.component';
import { CreatePostIndividualInputsComponent } from './create-post/create-post-individual-inputs/create-post-individual-inputs.component';
import { PostSkeletonComponent } from './post-skeleton/post-skeleton.component';
import { ThumbnailComponent } from './get-posts/thumbnail/thumbnail.component';
import { PostDetailsComponent } from './post-details/post-details.component';
@NgModule({
  declarations: [
    CreatePostComponent,
    GetPostsComponent,
    ImageUploaderComponent,
    SliderComponent,
    SafeResourceUrlPipe,
    CreatePostInputsComponent,
    CreatePostIndividualInputsComponent,
    PostSkeletonComponent,
    ThumbnailComponent,
    PostDetailsComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
    SwiperModule,
    GlobalModule,
    CommentModule,
  ],
  exports: [
    CreatePostComponent,
    GetPostsComponent,
    ThumbnailComponent,
    PostSkeletonComponent,
    GetPostsComponent,
  ],
})
export class PostModule {}
