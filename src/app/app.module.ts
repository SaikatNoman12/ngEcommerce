import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
