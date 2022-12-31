import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TruthyFalsyService } from './../services/truthy-falsy.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /* ----:USE FOR ACCOUNT DROPDOWN:---- */
  accountDropDown: boolean = false;

  constructor(
    private router: Router,
    private _truthyFalsy: TruthyFalsyService,
  ) {

    /* ----::USE FOR ACCOUNT DROPDOWN::---- */
    _truthyFalsy.accountDropDown.subscribe(
      (response: any) => {
        this.accountDropDown = response;
      }
    );

  }

  menuType: string = 'default';

  /* ----::ANGULAR OnInit HOOK::---- */
  ngOnInit(): void {

    /* ----::USE FOR DROPDOWN HIDE::---- */
    document.body.addEventListener('click', () => {
      this._truthyFalsy.accountDropDown.next(false);
    });

    this.router.events.subscribe(
      (val: any) => {
        if (val.url) {
          if (localStorage.getItem('sellerData') && val.url.includes('seller')) {
            this.menuType = 'seller';
            console.log('seller is here');
          }
          else {
            this.menuType = 'default';
            console.log('seller is not here!');
          }
        }
      }
    );

  }

  /* ----:USE FOR ACCOUNT DROPDOWN:---- */
  onShowAccountDrDwn(event: any): void {
    event.stopPropagation();

    this.accountDropDown = !this.accountDropDown;
    this._truthyFalsy.accountDropDown.next(this.accountDropDown);
  }

}
