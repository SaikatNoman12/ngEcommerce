import { SellerSignUp } from './../../interfaces/seller-sign-up';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  /* -----::USE FOR SELLER SIGNUP URL::----- */
  selSignUpUrl: string = "http://localhost:3000/seller";

  /* -----::CONSTRUCTOR METHOD::----- */
  constructor(
    private http: HttpClient,
  ) { }

  /* -----::USE FOR SELLER SIGNUP::----- */
  signUp(userData: SellerSignUp) {
    return this.http.post(this.selSignUpUrl, userData);
  }

}
