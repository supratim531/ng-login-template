import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _tokenService: TokenService = new TokenService();

  constructor() {
  }

  login(token: any): void {
    this._tokenService.storeToken(token);
  }

  logout(): void {
    this._tokenService.removeToken();
  }

  isLoggedIn(): boolean {
    let status = false;
    if (!this._tokenService.isTokenExist())
      return status;
    else {
      this._tokenService.loadCurrentUser().subscribe(
        data => {
          // console.log(data);
          status = (data.username === null) ? false : true;
        }
      );
      return status;
    }
  }

}
