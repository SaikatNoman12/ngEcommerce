import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  /* -----::USE FOR FORM::----- */
  myRecFrom!: FormGroup;
  /* -----::USE FOR GET URL PATHNAME::----- */
  urlPathName: any;


  /* -----::ANGULAR CONSTRUCTOR METHOD::----- */
  constructor(
    private fb: FormBuilder
  ) { }


  /* -----::ANGULAR OnInit HOOK::----- */
  ngOnInit(): void {
    /* -----::USE FOR FORM::----- */
    this.myRecFrom = this.fb.group({
      'name': [null, [Validators.required]],
      'email': [null, [Validators.required]],
      'password': [null, [Validators.required]],
    });

    /* -----::USE FOR SET URL PATHNAME::----- */
    this.urlPathName = location.pathname.split('/');
  }




}
