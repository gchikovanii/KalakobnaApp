import { Component, inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ],
})
export class HeroComponent {
  router = inject(Router);
  redirectToContact(){
    this.router.navigate(['/contact']);
  }
  redirectTo(){
    this.router.navigate(['/game-hub']);
  }
}
