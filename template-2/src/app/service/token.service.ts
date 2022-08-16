import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  private _currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  private _loadCurrentUser$ = this._currentUser.asObservable();

  constructor() {
  }

  isTokenExist(): boolean {
    return (this.fetchToken() === null) ? false : true;
  }

  storeToken(token: string): void {
    if (!this.isTokenExist())
      localStorage.setItem("webapp_access_token", token);
  }

  fetchToken(): string | null {
    return localStorage.getItem("webapp_access_token");
  }

  removeToken(): void {
    if (this.isTokenExist())
      localStorage.removeItem("webapp_access_token");
  }

  loadCurrentUser(): Observable<any> {
    this._extractUserFromToken();
    return this._loadCurrentUser$;
  }

  private _extractUserFromToken(): void {
    let user;
    const token = this.fetchToken();
    if (token === 'eb2h98fCj0KCQjwgO2XBhCaARIsANrW2X2dgUw8X7LhJCAr11Rrj5NpAD39ebqglXLv1aWMbEtwy') {
      user = {
        expireDate: 1660634863,
        username: 'supratim531'
      };
    } else {
      user = {
        expireDate: null,
        username: null
      };
    }
    this._currentUser.next(user);
  }

}
