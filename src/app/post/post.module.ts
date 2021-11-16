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
@NgModule({
  declarations: [
    CreatePostComponent,
    GetPostsComponent,
    ImageUploaderComponent,
    SliderComponent,
    SafeResourceUrlPipe,
    CreatePostInputsComponent,
    CreatePostIndividualInputsComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
    SwiperModule,
  ],
  exports: [CreatePostComponent, GetPostsComponent],
})
export class PostModule {}
