import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [TranslateModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  langText:string = '';
  phoneNum:number = 12345678;
  currentLanguage: string = 'en'; // Default to English

  constructor(private _route:Router, private translate: TranslateService){
     this.currentLanguage = localStorage.getItem('language') || 'en';
  this.translate.setDefaultLang('en');
  this.translate.use(this.currentLanguage);
  this.setLangText();
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
  toggleLanguage(selectedLanguage: string): void {
    
    this.currentLanguage = selectedLanguage;
    const flagElement = document.querySelector('.flag-icon');
  if (flagElement) {
    flagElement.classList.add('animate-wave');
    setTimeout(() => {
      flagElement.classList.remove('animate-wave');
    }, 1000); // Duration matches the CSS animation
  }
    
    // Update the language in the translation service
    this.translate.use(selectedLanguage);
  
    // Save the selected language in localStorage for persistence
    localStorage.setItem('language', selectedLanguage);
    this.setLangText();
  }
  setLangText(): void {
    // Set langText value based on the current language
    this.langText = this.currentLanguage === 'en' ? 'FR' : 'UK';  // Example for 'Hello' and 'Bonjour'
  }
}
