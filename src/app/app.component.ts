import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
      const routeLocation = location.pathname.includes('seller') ? '/seller' : location.pathname;
      this.router.navigate([routeLocation]);
    }

  }

}
