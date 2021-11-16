import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post-individual-inputs',
  templateUrl: './create-post-individual-inputs.component.html',
  styleUrls: ['./create-post-individual-inputs.component.scss'],
})
export class CreatePostIndividualInputsComponent implements OnInit {
  @Input() head: string = '';
  open = window.innerWidth > 800 ? true : false;
  constructor() {}
  ngOnInit(): void {}
  toggle($event: any) {
    $event.stopPropagation();

    this.open = !this.open;
  }
}
