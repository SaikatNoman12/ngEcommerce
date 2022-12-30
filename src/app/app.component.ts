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

    /* -----::USE FOR SELLER DON'T SIGN-UP::----- */
    if (!localStorage.getItem('sellerData')) {
      const routeLocation = location.pathname;
      this.router.navigate([routeLocation === '/seller-home' ? '/seller' : routeLocation]);
      console.log(routeLocation);
    }

  }

}
