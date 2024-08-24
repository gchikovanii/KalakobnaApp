import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  animations: [
    trigger('pulseFade', [
      transition(':enter', [
        animate('1s ease-in', keyframes([
          style({ opacity: 0, transform: 'scale(0.85)', offset: 0 }),
          style({ opacity: 0.7, transform: 'scale(0.95)', offset: 0.7 }),
          style({ opacity: 1, transform: 'scale(1)', offset: 1.0 }),
        ]))
      ])
    ])
  ],
})
export class TeamComponent {
  faLinked = faLinkedin;
  faFb = faFacebook;
  fatwitter = faXTwitter;
  faInstagram = faInstagram;
  isVisible = false;
  el = inject(ElementRef);
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      this.isVisible = true;
    }
  }
}
