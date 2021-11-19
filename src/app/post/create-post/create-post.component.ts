import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Component, ElementRef, OnInit } from '@angular/core';
import { FileUploadValidators } from '@iplab/ngx-file-upload';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  files: any = [];
  postForm = new FormGroup({
    photos: new FormControl(null, FileUploadValidators.filesLimit(4)),
    title: new FormControl(''),
    description: new FormControl(''),
    private: new FormControl(true),
    keywords: new FormControl(''),
  });
  constructor(
    private el: ElementRef,
    private router: Router,
    private postService: PostService,
    private _snackBar: MatSnackBar
  ) {
    this.postForm.get('photos')!.valueChanges.subscribe((photos) => {
      if (photos) {
        let UrlObjectArray = photos.map((photo: any) =>
          URL.createObjectURL(photo)
        );
        this.files = UrlObjectArray;
      }
    });
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  closePage(event: any) {
    event.stopPropagation();
    this.router.navigateByUrl('/dashboard');
  }
  submitForm() {
    this.postService.createPost(this.postForm.value).subscribe(
      (res) => {
        this.router.navigateByUrl('/dashboard');
        this.postForm.reset();
      },
      (err) => {
        console.log(err);
        if (err.error.description) {
          err.error.description = 'please fill all inputs';
        }
        this._snackBar.open(err.error.description, 'close', {});
      }
    );
  }
}
