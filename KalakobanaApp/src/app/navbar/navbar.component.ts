import { Component, ElementRef, EventEmitter, HostListener, Output, signal } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [HeroComponent]
})
export class NavbarComponent {
  isMenuOpen = signal(false);
  loggedIn = signal(false);
  profileMenu = false;

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
