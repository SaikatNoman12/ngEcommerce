import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyrightYear: any = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

  contactUs: boolean = false;
  category: boolean = false;
  service: boolean = false;
  extras: boolean = false;


  onContactUs() {
    this.contactUs = !this.contactUs;
  }

  onCategory() {
    this.category = !this.category;
  }

  onService() {
    this.service = !this.service;
  }

  onExtras() {
    this.extras = !this.extras;
  }

}
