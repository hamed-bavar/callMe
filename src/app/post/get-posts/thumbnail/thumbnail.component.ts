import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() keywords: string;
  @Input() imageUrl: string;
  constructor() {}

  ngOnInit(): void {}
}
