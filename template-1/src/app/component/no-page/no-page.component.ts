import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.css']
})

export class NoPageComponent implements OnInit {

  constructor(
    private _title: Title
  ) {
  }

  ngOnInit(): void {
    this._title.setTitle('404 Not Found | Angular')
  }

}
