import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

// export const JwtHelperService  = {
//   provide: _JwtHelperService,
//   useFactory: () => {
//     return new _JwtHelperService();
//   }
// };

export class AuthService {

  constructor(public jwtHelper: JwtHelperService) {
    this.jwtHelper = new JwtHelperService();
  }

  // ...
  public isAuthenticated(): boolean {
    // Check whether the token is expired and return
    const token = this.getToken();
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
