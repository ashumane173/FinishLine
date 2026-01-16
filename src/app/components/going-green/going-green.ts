import { Component } from '@angular/core';

@Component({
  selector: 'app-going-green',
  standalone: false,
  templateUrl: './going-green.html',
  styleUrl: './going-green.css',
})
export class GoingGreen {

  
  openPDF(type: string): void {
    let url: string;

    switch (type) {
      case 'green':
        url = 'assets/Finish_Line_Green_Certificate.pdf';
        break;
      case 'leed':
        url = 'assets/Finish_Line_LEED_letter.pdf';
        break;
      case 'asbestos':
        url = 'assets/Finish_Line_Asbestos_Letter.pdf';
        break;
      default:
        console.warn('Unknown PDF type:', type);
        return;
    }

    window.open(url, '_blank', 'noopener');
  }

}