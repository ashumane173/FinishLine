import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { OurGuarantee } from './components/our-guarantee/our-guarantee';
import { ContactUs } from './components/contact-us/contact-us';
import { Products } from './components/products/products';
import { ProductDetail } from './components/product-detail/product-detail';
import { GoingGreen } from './components/going-green/going-green';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'our-guarantee', component: OurGuarantee },
  { path: 'contact-us', component: ContactUs },
  { path: 'products', component: Products },
  { path: 'product/:id', component: ProductDetail },
  { path: 'going-green', component: GoingGreen }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
