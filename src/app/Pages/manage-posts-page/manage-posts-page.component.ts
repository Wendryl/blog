import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-posts-page',
  templateUrl: './manage-posts-page.component.html',
  styleUrls: ['./manage-posts-page.component.css']
})
export class ManagePostsPageComponent implements OnInit {

  posts = [
    {
      id: 1,
      title: 'AngularJS vs Angular 2+',
      slug: 'angularjs-vs-angular2'
    },
    {
      id: 2,
      title: 'AngularJS vs Angular 2+',
      slug: 'angularjs-vs-angular2'
    },
    {
      id: 3,
      title: 'AngularJS vs Angular 2+',
      slug: 'angularjs-vs-angular2'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
