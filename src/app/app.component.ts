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
    private router: Router,
  ) { }

  arr: any = [];

  ngOnInit(): void {

    /* -----::USE FOR SELLER DON'T SIGN-UP::----- */
    if (!localStorage.getItem('sellerData')) {
      const routeLocation = location.pathname.includes('seller') ? '/seller' : location.pathname;
      this.router.navigate([routeLocation]);
    }
    // else {
    //   const localUser = localStorage.getItem('sellerData');
    //   const localData = localUser && JSON.parse(localUser)[0]?.name.split(' ').join('');

    //   if (location.pathname !== '/seller%3F-' + localData) {
    //     const locData = location.pathname.includes('seller%') && location.pathname.includes('%3F') ? '/seller?-' + localData : location.pathname;
    //     this.router.navigate([locData]);
    //     // console.log('nehi mila');
    //   }
    //   else {
    //     this.router.navigate(['/seller?-' + localData]);
    //     // console.log('mill gea');
    //   }

    // }

    /* -----::OUR FUNNY MESSAGE::----- */
    console.log('%cHey, hello mr./ms. Why are you open developer coNsole?', 'background:red; font-size:30px; padding:7px 20px 8px 20px; border-radius:4px;');

  }

}
