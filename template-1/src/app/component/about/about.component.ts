import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor(
    private _title: Title
  ) {
  }

  ngOnInit(): void {
    this._title.setTitle('About | Angular');
  }

}
