import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Output() onDeletePost: EventEmitter<number> = new EventEmitter();
  @Output() onGoToPost: EventEmitter<number> = new EventEmitter();
  @Input() deleteMod: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  deletePost($event: any) {
    console.log('yes');
    $event.stopPropagation();
    this.onDeletePost.emit(this.id);
  }
  goToPost($event: any) {
    console.log('stop pro');
    $event.stopPropagation();
    this.onGoToPost.emit(this.id);
  }
}
