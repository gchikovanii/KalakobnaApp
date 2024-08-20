import { Component, ElementRef, EventEmitter, HostListener, Output, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
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
