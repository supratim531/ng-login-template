import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  loginOnClick(): void {
    this._authService.login('eb2h98fCj0KCQjwgO2XBhCaARIsANrW2X2dgUw8X7LhJCAr11Rrj5NpAD39ebqglXLv1aWMbEtwy');
    this._router.navigateByUrl('/');
  }

}
