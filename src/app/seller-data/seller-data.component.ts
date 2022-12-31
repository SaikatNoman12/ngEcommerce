import { Component, OnInit } from '@angular/core';
import { SellerSignUp } from './../interfaces/seller-sign-up';

@Component({
  selector: 'app-seller-data',
  templateUrl: './seller-data.component.html',
  styleUrls: ['./seller-data.component.scss']
})
export class SellerDataComponent implements OnInit {

  getSellerData!: SellerSignUp;

  constructor(
  ) { }

  ngOnInit(): void {

    if (localStorage.getItem('sellerData')) {
      const localData = JSON.parse(localStorage.getItem('sellerData') as any)[0];

      this.getSellerData = localData;
    }

  }

}
