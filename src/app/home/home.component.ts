import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proFeature: boolean = true;
  proLatest: boolean = false;
  proBestseller: boolean = false;

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

}
