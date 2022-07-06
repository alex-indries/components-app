import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {
      value: 22,
      label: '# of Users',
    },
    {
      value: 900,
      label: '# of Revenue',
    },
    {
      value: 50,
      label: '# of Reviews',
    },
  ];

  items = [
    {
      image: 'assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a couch to sit on',
    },
    {
      image: 'assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a dresser to put clothes in',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
