import { Router } from '@angular/router';
import { SellerService } from './services/seller/seller.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eCommerce';

  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
    if (!localStorage.getItem('sellerData')) {
      this.router.navigate(['']);
    }
  }

}
