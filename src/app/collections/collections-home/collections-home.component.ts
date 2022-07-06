import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Alex', age: 23, job: 'Developer', employed: false },
    { name: 'Adi', age: 24, job: 'Engineer', employed: true },
    { name: 'Timotei', age: 22, job: 'Developer', employed: true },
  ];
  headers = [
    { key: 'employed', label: 'Has a Job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
