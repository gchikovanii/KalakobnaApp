import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  faLinked = faLinkedin;
  faFb = faFacebook;
  fatwitter = faXTwitter;
  faInstagram = faInstagram;
}
