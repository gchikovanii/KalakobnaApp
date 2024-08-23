import { Component, ElementRef, EventEmitter, HostListener, Output, signal } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [HeroComponent, NewsletterComponent, RouterModule, TranslateModule]
})
export class NavbarComponent {
  isMenuOpen = signal(false);
  loggedIn = signal(false);
  profileMenu = false;
  savedLanguage = signal('ქართული');

  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language');
    const defaultLanguage = savedLanguage ? savedLanguage : 'ka';

    this.updateSavedLanguage(defaultLanguage);
    this.translate.setDefaultLang(defaultLanguage);
    this.translate.use(defaultLanguage);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang).subscribe(() => {
      localStorage.setItem('language', lang);
      this.updateSavedLanguage(lang);
      this.closeDropdown();
    });
  }

  private updateSavedLanguage(lang: string) {
    this.savedLanguage.set(lang === 'ka' ? 'ქართული' : 'English');
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const isDropdownButton = target.closest('#languageDropdownButton');
    if (!isDropdownButton) {
      this.closeDropdown(); // Close dropdown if clicking outside
    }
  }

  
  dropdownOpen = false;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
  toggleProfileMenu() {
    this.profileMenu = !this.profileMenu;
  }
  login() {
    this.loggedIn.set(true);
    this.isMenuOpen.set(false);
  }
  logOut() {
    this.loggedIn.set(false);
    this.profileMenu = false; 
  }
  handleOutsideClick() {
    this.profileMenu = false;
  }
}
