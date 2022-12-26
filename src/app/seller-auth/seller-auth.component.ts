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

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    /* -----::USE FOR FORM::----- */
    this.myRecFrom = this.fb.group({
      'name': [null, [Validators.required]],
      'email': [null, [Validators.required]],
      'password': [null, [Validators.required]],
    });

    this.urlPathName = location.pathname.split('/');
    console.log(this.urlPathName);

  }

}
