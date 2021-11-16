import { Router } from '@angular/router';
import { Component, ElementRef, OnInit } from '@angular/core';
import {
  FileUploadControl,
  FileUploadValidators,
} from '@iplab/ngx-file-upload';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  postForm = new FormGroup({
    photos: new FormControl(null, FileUploadValidators.filesLimit(4)),
    title: new FormControl(''),
    description: new FormControl(''),
    private: new FormControl(true),
    tag: new FormControl('noice'),
  });

  constructor(private el: ElementRef, private router: Router) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  closePage(event: any) {
    event.stopPropagation();
    this.router.navigateByUrl('/dashboard');
  }
  submitForm() {
    console.log('submit it');
    console.log(this.postForm.value);
  }
}
