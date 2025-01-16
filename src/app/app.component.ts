import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Core/Layout/navbar/navbar.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WhatsappShareComponent } from "./Core/Layout/whatsapp-share/whatsapp-share.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WhatsappShareComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sepa-travels';
}
