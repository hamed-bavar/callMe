import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post-inputs',
  templateUrl: './create-post-inputs.component.html',
  styleUrls: ['./create-post-inputs.component.scss'],
})
export class CreatePostInputsComponent implements OnInit {
  isChecked = false;
  @Input() titleControl: FormControl;
  @Input() descriptionControl: FormControl;
  @Input() privateControl: FormControl;
  @Input() tagsControl: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
