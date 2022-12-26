import { SellerSignUp } from './../interfaces/seller-sign-up';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private fb: FormBuilder
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
  }

  /* -----::GET REACTIVE FORM CONTROL::----- */
  get formControls() {
    return this.myRecForm.controls;
  }


  onSelFmSubmit() {
    if (this.myRecForm.valid) {

      const userData: SellerSignUp = this.myRecForm.value;
      console.log(userData);

    }
    else {

      const key = Object.keys(this.formControls);
      key.filter(userData => {
        const control = this.myRecForm.controls[userData];
        if (control.errors !== null) {
          control.markAsTouched();
        }
      }
      );

    }
  }


}
