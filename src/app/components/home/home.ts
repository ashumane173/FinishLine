import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  heroImagePath = 'assets/finish-line-hero-image.png';
  
  goToNews(): void {
    window.open(environment.newsLinkPath, '_blank');
  }

}