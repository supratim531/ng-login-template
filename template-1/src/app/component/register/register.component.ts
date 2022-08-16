import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(
    private _title: Title
  ) {
  }

  ngOnInit(): void {
    this._title.setTitle('Register | Angular');
  }

}
