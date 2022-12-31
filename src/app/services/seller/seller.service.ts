import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SellerSignUp, SellerLogin } from './../../interfaces/seller-sign-up';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  /* -----::USE FOR SELLER GUARD::----- */
  sellerGuard = new BehaviorSubject<boolean>(false);

  /* -----::USE FOR SELLER LOGIN ERROR SHOW::----- */
  isError = new EventEmitter<boolean>(false);

  /* -----::USE FOR SELLER SIGNUP URL::----- */
  selSignUpUrl: string = "http://localhost:3000/seller";

  /* -----::CONSTRUCTOR METHOD::----- */
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  /* -----::USE FOR SELLER SIGNUP::----- */
  signUp(userData: SellerSignUp) {
    this.http.post(
      this.selSignUpUrl, userData, { observe: 'response' }
    ).subscribe(
      (res) => {
        if (res) {
          this.sellerGuard.next(true);
          localStorage.setItem('sellerData', JSON.stringify(res.body));
          this.router.navigate(['seller-home']);
        }
      }
    );
  }

  /* -----::USE SELLER REFRESH AND AUTO-SIGN-IN::----- */
  autoSignIn() {
    let getLocalData = localStorage.getItem('sellerData');
    if (getLocalData) {
      this.sellerGuard.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  /* -----::USE SELLER LOGIN::----- */
  sellerLogin(data: SellerLogin) {

    this.http.get<any>(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: 'response' })
      .subscribe(
        (result: any) => {
          if (result && result.body && result.body.length) {

            this.sellerGuard.next(true);
            localStorage.setItem('sellerData', JSON.stringify(result.body));
            this.router.navigate(['seller-home']);

            /* -----::SELLER LOGIN ERROR SHOW::----- */
            this.isError.emit(false);
          }
          else {
            /* -----::SELLER LOGIN ERROR SHOW::----- */
            this.isError.emit(true);
          }
        }
      );

  }


}
