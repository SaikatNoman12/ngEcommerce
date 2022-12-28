import { SellerService } from './../services/seller/seller.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerGuard implements CanActivate {

  constructor(
    private _sellerService: SellerService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    /* -----::USE SELLER REFRESH AND AUTO-SIGN-IN::----- */
    if (localStorage.getItem('sellerData')) {
      return true;
    }
    return this._sellerService.sellerGuard;
  }

}
