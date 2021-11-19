import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Component, ElementRef, OnInit } from '@angular/core';
import { FileUploadValidators } from '@iplab/ngx-file-upload';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    private: new FormControl(true, Validators.required),
    keywords: new FormControl('', Validators.required),
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
    if (this.postForm.valid) {
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
    } else {
      this._snackBar.open('please fill all inputs', 'close', {});
    }
  }
}
