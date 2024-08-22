import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ],
})
export class NewsletterComponent {

}
