import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items: any = [
    {
      title: 'First item title',
      content: 'First item content',
    },
    {
      title: 'Second item title',
      content: 'Second item content',
    },
    {
      title: 'Third item title',
      content: 'Third item content',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
