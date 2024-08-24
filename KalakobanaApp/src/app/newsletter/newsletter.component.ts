import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [RouterModule],
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


    constructor(private router: Router){}
    onClick(){
      this.router.navigate(['/terms']);
    }
}
