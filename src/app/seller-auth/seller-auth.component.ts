import { SellerService } from './../services/seller/seller.service';
import { SellerSignUp, SellerLogin } from './../interfaces/seller-sign-up';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  /* -----::USE FOR SWITCH SIGN-UP AND LOGIN::----- */
  switchToggle: boolean = false;

  /* -----::USE FOR LOGIN FIELD & SHOW ERROR::----- */
  isErrorData: string = '';

  /* -----::USE FOR CREATE ACCOUNT::----- */
  myRecForm!: FormGroup;

  /* -----::USE FOR LOGIN::----- */
  myLoginForm!: FormGroup;

  /* -----::USE FOR GET URL PATHNAME::----- */
  urlPathName: any;

  /* -----::ANGULAR CONSTRUCTOR METHOD::----- */
  constructor(

    private fb: FormBuilder,
    private _sellerDBService: SellerService,

  ) { }

  /* -----::ANGULAR OnInit HOOK::----- */
  ngOnInit(): void {

    /* -----::USE FOR CREATE ACCOUNT::----- */
    this.myRecForm = this.fb.group({
      'name': [null, [Validators.required]],
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required, Validators.minLength(8)]],
    });

    /* -----::USE FOR SELLER LOGIN::----- */
    this.myLoginForm = this.fb.group({
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

  /* -----::USE FOR SWITCH SIGN-UP AND LOGIN::----- */
  get formLoginControls() {
    return this.myLoginForm.controls;
  }

  /* -----::USE FOR SELLER LOGIN::----- */
  onSwitchAccount() {
    this.switchToggle = !this.switchToggle;
    this.isErrorData = '';
  }

  /* -----::USE FOR CREATE ACCOUNT::----- */
  onSelFmSubmit(): void {
    if (!this.switchToggle) {
      if (this.myRecForm.valid) {
        const userData: SellerSignUp = this.myRecForm.value;
        this._sellerDBService.signUp(userData);
        console.log('USER CREATE ACCOUNT');
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

  /* -----::USE FOR SELLER LOGIN::----- */
  onLoginSubmit(): void {
    if (this.switchToggle) {
      if (this.myLoginForm.valid) {
        
        const sellerLogData: SellerLogin = this.myLoginForm.value;
        this._sellerDBService.sellerLogin(sellerLogData);

        /* -----::USE FOR SELLER ERROR SHOW::----- */
        this._sellerDBService.isError.subscribe(
          (error) => {
            if (error) {
              this.isErrorData = 'Email or Password is not correct!';
            }
          }
        );

      }
      else {
        const key = Object.keys(this.formLoginControls);
        key.filter(userData => {
          const control = this.myRecForm.controls[userData];
          if (control.errors !== null) {
            control.markAsTouched();
          }
        });
      }
    }
  }


}
