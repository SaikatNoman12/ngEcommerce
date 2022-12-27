import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TruthyFalsyService {

  /* -----::USE FOR ACCOUNT DROPDOWN SHOW::----- */
  accountDropDown = new BehaviorSubject<boolean>(false);

  constructor() { }

  
}
