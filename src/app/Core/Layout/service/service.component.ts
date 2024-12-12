import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-service',
  imports: [NavbarComponent, FooterComponent,TranslateModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
