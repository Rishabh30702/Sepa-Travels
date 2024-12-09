import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  phoneNum:number = 12345678;

  constructor(private _route:Router, private translate: TranslateService){
    const savedLanguage = localStorage.getItem('language') || 'en';
  this.translate.setDefaultLang('en');
  this.translate.use(savedLanguage);

  // Set toggle state based on saved language
  setTimeout(() => {
    const toggleInput = document.querySelector(
      '.language-switch input'
    ) as HTMLInputElement;
    if (toggleInput) {
      toggleInput.checked = savedLanguage === 'fr';
    }
  });
   }
  about(){
    this._route.navigate(['/About'])
  }
  home(){
    this._route.navigate([''])
  }
  service(){
    this._route.navigate(['/Service'])
  }
  contact(){
    this._route.navigate(['/Contact'])
  }
  callIn(){
    const phone = this.phoneNum;
    const makecall = `tel:${phone}`;
    window.location.href = makecall;
  }

  menuItemSelected(): void {
    // Hide the hamburger icon by modifying its display
    const hamburgerIcon = document.querySelector('.navbar-toggler');

    // Close the collapsible menu by removing the 'show' class
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }
  toggleLanguage(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const selectedLanguage = isChecked ? 'fr' : 'en';
  
    // Use the selected language
    this.translate.use(selectedLanguage);
  
    // Save the selected language in localStorage for persistence
    localStorage.setItem('language', selectedLanguage);
  }
}
