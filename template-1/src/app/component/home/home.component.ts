import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  constructor(
    private _title: Title,
    private _authService: AuthService,
    private _tokenService: TokenService
  ) {
  }

  ngOnInit(): void {
    this.greetUser();
    this._title.setTitle('Home | Angular');
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

}
