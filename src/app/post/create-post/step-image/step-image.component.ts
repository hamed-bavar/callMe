import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step-image',
  templateUrl: './step-image.component.html',
  styleUrls: ['./step-image.component.scss'],
})
export class StepImageComponent implements OnInit {
  @ViewChild('imageInput') input: any;
  files: any[] = [];
  constructor() {}

  ngOnInit(): void {}
  selectImages() {
    this.input.nativeElement.click();
  }
  onSelectFile(event: any) {
    this.files.push(this.input.nativeElement.files[0]);
    console.log(this.files);
  }
}
