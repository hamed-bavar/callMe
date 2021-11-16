import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent implements OnInit {
  panelOpenState = false;
  @Input() tagc: FormControl;
  @Input() descriptionc: FormControl;
  @Input() privatec: FormControl;
  @Input() titlec: FormControl;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {}

  ngOnInit(): void {}
}
