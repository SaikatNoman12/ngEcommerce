import { TruthyFalsyService } from './../services/truthy-falsy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /* ----:USE FOR ACCOUNT DROPDOWN:---- */
  accountDropDown: boolean = false;

  constructor(
    private _truthyFalsy: TruthyFalsyService
  ) {

    /* ----:USE FOR ACCOUNT DROPDOWN:---- */
    _truthyFalsy.accountDropDown.subscribe(
      (response: any) => {
        this.accountDropDown = response;
      }
    );
  }

  ngOnInit(): void {
    document.body.addEventListener('click', () => {
      this._truthyFalsy.accountDropDown.next(false);
    });
  }

  onShowAccountDrDwn(eev: any) {
    eev.stopPropagation()
    this.accountDropDown = !this.accountDropDown;
    this._truthyFalsy.accountDropDown.next(this.accountDropDown);
  }

}
