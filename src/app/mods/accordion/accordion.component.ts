import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items: any = [];
  openedIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  expandItem(i: number) {
    if (i === this.openedIndex) {
      this.openedIndex = -1;
    } else {
      this.openedIndex = i;
    }
  }
}
