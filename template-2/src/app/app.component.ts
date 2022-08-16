import { Component, DoCheck, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
    private _title: Title,
    private _router: Router,
    private _authService: AuthService,
    private _activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.changeBrowserTitle();
    this.userLoggedIn = this._authService.isLoggedIn();
  }

  ngDoCheck(): void {
    this.userLoggedIn = this._authService.isLoggedIn();
  }

  changeBrowserTitle(): void {
    this._router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationEnd:
          let child = this._activatedRoute.firstChild;
          while (child?.firstChild)
            child = child?.firstChild;
          this._title.setTitle(child?.snapshot.data['title']);
          break;
        default:
          break;
      }
    });
  }

  logoutOnClick(): void {
    console.log('Logout button works');
    this._authService.logout();
    this._router.navigateByUrl('/login');
  }

}
