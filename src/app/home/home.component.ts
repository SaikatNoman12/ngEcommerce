import { Component, OnInit, ViewEncapsulation } from '@angular/core';


// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay, EffectCoverflow, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCoverflow]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  reactPro: boolean = false;

  proFeature: boolean = true;
  proLatest: boolean = false;
  proBestseller: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  feature() {
    this.proLatest = false;
    this.proBestseller = false;
    this.proFeature = true;

  }

  latest() {
    this.proFeature = false;
    this.proBestseller = false;
    this.proLatest = true;
  }

  bestseller() {
    this.proBestseller = true;
    this.proFeature = false;
    this.proLatest = false;
  }

  onReactProduct(data: number) {
    this.reactPro = !this.reactPro;
  }


  dayDeal: any = [
    {
      _id: 1,
      endDate: 'jan 19 2024 23:59:59'
    },
    {
      _id: 2,
      endDate: 'Jan 20 2025 23:59:59'
    },
    {
      _id: 3,
      endDate: 'feb 20 2025 23:59:59'
    }
  ];

  pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

}
