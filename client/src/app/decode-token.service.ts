import { Injectable } from '@angular/core';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class DecodeTokenService {

  constructor() { }

  decodeJWT() {
    if (localStorage.getItem('token')) {
      const tokenData = JSON.parse(localStorage.getItem('token'));
      return decode(tokenData.token);
    }
  }

}
