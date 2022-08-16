import { Component, DoCheck, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  greetMessage!: string;
  userLoggedIn: boolean = false;
  jwtHelperService: JwtHelperService = new JwtHelperService();

  constructor(
    private _authService: AuthService,
    private _tokenService: TokenService
  ) {
  }

  ngOnInit(): void {
    this.greetUser();
    this.jwtDecryptionTest();
  }

  test(): void {
    let username;
    if (this._authService.isLoggedIn()) {
      this._tokenService.loadCurrentUser().subscribe(
        data => {
          username = data.username;
        }
      );
      console.log(`User ${username} is logged in`);
    }
    else
      console.log(`User is not logged in`);
  }

  greetUser(): void {
    if (this._authService.isLoggedIn()) {
      this.userLoggedIn = true;
      this._tokenService.loadCurrentUser().subscribe(
        data => {
          this.greetMessage = `Welcome user ${data.username}`;
        }
      );
    }
  }

  jwtDecryptionTest(): void {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJzYXlhbkBnbWFpbC5jb20iLCJzdWIiOiJzYXlhbkA5MTYzNjgxNjcyIiwiZXhwIjoxNjYwNjgwNzU0LCJpYXQiOjE2NjA2ODAxNTR9.01SKCHr8_dmRerzs0P4UIFfWBci8wwP-Di7EfNStd34';
    const userDetails = this.jwtHelperService.decodeToken(token);
    console.log(userDetails);
  }

}
