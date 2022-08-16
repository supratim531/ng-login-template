import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck {

  title = 'ng-recap-2';
  userLoggedIn: boolean = false;

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.userLoggedIn = this._authService.isLoggedIn();
  }

  ngDoCheck(): void {
    this.userLoggedIn = this._authService.isLoggedIn();
  }

  logoutOnClick(): void {
    console.log('Logout button works');
    this._authService.logout();
    this._router.navigateByUrl('/login');
  }

}
