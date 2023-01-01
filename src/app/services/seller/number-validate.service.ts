import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NumberValidateService {

  constructor() { }

  static numeric(control: AbstractControl) {
    let val = control.value;

    if (val === null || val === '') {
      return null;
    };

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) {
      return { 'invalidNumber': true };
    }

    return null;
  }

}
