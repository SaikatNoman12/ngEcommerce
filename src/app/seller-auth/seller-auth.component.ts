import { SellerService } from './../services/seller/seller.service';
import { SellerSignUp } from './../interfaces/seller-sign-up';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  /* -----::USE FOR FORM::----- */
  myRecForm!: FormGroup;
  /* -----::USE FOR GET URL PATHNAME::----- */
  urlPathName: any;

  /* -----::ANGULAR CONSTRUCTOR METHOD::----- */
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _sellerDBService: SellerService,
  ) { }

  /* -----::ANGULAR OnInit HOOK::----- */
  ngOnInit(): void {
    /* -----::USE FOR FORM::----- */
    this.myRecForm = this.fb.group({
      'name': [null, [Validators.required]],
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required, Validators.minLength(8)]],
    });

    /* -----::USE FOR SET URL PATHNAME::----- */
    this.urlPathName = location.pathname.split('/');


    /* -----::USE SELLER REFRESH AND AUTO-SIGN-IN::----- */
    this._sellerDBService.autoSignIn();
  }

  /* -----::GET REACTIVE FORM CONTROL::----- */
  get formControls() {
    return this.myRecForm.controls;
  }

  /* -----::USE FOR FORM::----- */
  onSelFmSubmit(): void {
    if (this.myRecForm.valid) {
      const userData: SellerSignUp = this.myRecForm.value;
      this._sellerDBService.signUp(userData);
    }
    else {
      const key = Object.keys(this.formControls);
      key.filter(userData => {
        const control = this.myRecForm.controls[userData];
        if (control.errors !== null) {
          control.markAsTouched();
        }
      });
    }
  }

}
