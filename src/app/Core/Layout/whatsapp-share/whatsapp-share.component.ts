import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-share',
  imports: [],
  templateUrl: './whatsapp-share.component.html',
  styleUrl: './whatsapp-share.component.css'
})
export class WhatsappShareComponent {
@Input() phoneNumber:string="";
  openWhatsApp() {
    const baseUrl = 'https://wa.me/';
    const url = this.phoneNumber
      ? `${baseUrl}${this.phoneNumber}`
      : 'https://web.whatsapp.com'; // Default to WhatsApp Web if no number
    window.open(url, '_blank');
  }
}
