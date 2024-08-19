import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  loggedIn = signal(true);
  profileMenu = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleProfileMenu() {
    this.profileMenu = !this.profileMenu;
    console.log(this.profileMenu);
  }
  login(){
    this.loggedIn.set(true);
  }
  logOut(){
    this.loggedIn.set(false);
  }
}
