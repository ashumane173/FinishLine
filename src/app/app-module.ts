import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { OurGuarantee } from './components/our-guarantee/our-guarantee';
import { ContactUs } from './components/contact-us/contact-us';
import { Products } from './components/products/products';
import { ProductDetail } from './components/product-detail/product-detail';
import { GoingGreen } from './components/going-green/going-green';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    AboutUs,
    OurGuarantee,
    ContactUs,
    Products,
    ProductDetail,
    GoingGreen
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
