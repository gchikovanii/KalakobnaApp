import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAreaChart, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    trigger('flipFadeIn', [
      transition(':enter', [
        animate('0.8s ease-out', keyframes([
          style({ opacity: 0, transform: 'rotateY(-90deg)', offset: 0 }),
          style({ opacity: 0.5, transform: 'rotateY(-45deg)', offset: 0.5 }),
          style({ opacity: 1, transform: 'rotateY(0deg)', offset: 1.0 })
        ]))
      ])
    ])
  ],
})
export class ContactComponent {
  faEnvelope = faEnvelope;
  faUser = faUser;
  faTextArea = faAreaChart;
}
