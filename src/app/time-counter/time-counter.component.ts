import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-counter',
  templateUrl: './time-counter.component.html',
  styleUrls: ['./time-counter.component.scss']
})
export class TimeCounterComponent implements OnInit {

  @Input() endDate!: string;
  clear: boolean = false;
  days!: number | string;
  hour!: number | string;
  min!: number | string;
  sec!: number | string;

  constructor() { }

  ngOnInit(): void {

    let time = setInterval(() => {
      if (this.clear) {
        clearInterval(time);
      }
      else {
        this.onDiscountData(this.endDate);
      }

    }, 1000);

  }

  onDiscountData(dateData: string) {
    const convertDate = `${dateData}`;

    if (new Date(dateData).getFullYear() < new Date().getFullYear()) {
      this.clear = true;
      return;
    }

    if (new Date(dateData).getFullYear() === new Date().getFullYear() && new Date(dateData).getMonth() === new Date().getMonth() && new Date(dateData).getDate() < new Date().getDate()) {
      if (new Date(dateData).getDate() < new Date().getDate()) {
        this.clear = true;
        return;
      }
    }

    const discountDate: any = new Date(convertDate).getTime();
    let now = new Date().getTime();

    let timeRemaining = discountDate - now;

    let secondAbsolute = Math.floor(timeRemaining / 1000);
    let minuteAbsolute = Math.floor(timeRemaining / (1000 * 60));
    let hourAbsolute = Math.floor(timeRemaining / (1000 * 60 * 60));
    let daysAbsolute = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));


    this.days = daysAbsolute < 10 ? '0' + daysAbsolute : daysAbsolute;
    this.hour = hourAbsolute - (daysAbsolute * 24) < 10 ? '0' + (hourAbsolute - (daysAbsolute * 24)) : hourAbsolute - (daysAbsolute * 24);
    this.min = minuteAbsolute - (hourAbsolute * 60) < 10 ? '0' + (minuteAbsolute - (hourAbsolute * 60)) : minuteAbsolute - (hourAbsolute * 60);
    this.sec = secondAbsolute - (minuteAbsolute * 60) < 10 ? '0' + (secondAbsolute - (minuteAbsolute * 60)) : secondAbsolute - (minuteAbsolute * 60);

    if (this.days < 0) {
      this.clear = true;
    }

  }

}
