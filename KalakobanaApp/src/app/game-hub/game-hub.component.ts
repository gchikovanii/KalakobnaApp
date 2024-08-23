import { Component } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-game-hub',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './game-hub.component.html',
  styleUrl: './game-hub.component.css',
  animations: [
    trigger('bounceScaleIn', [
      transition(':enter', [
        animate('0.8s ease-out', keyframes([
          style({ transform: 'scale(0.5)', offset: 0 }),
          style({ transform: 'scale(1.0)', offset: 0.5 }),
          style({ transform: 'scale(0.9)', offset: 0.7 }),
          style({ transform: 'scale(1)', offset: 1.0 })
        ]))
      ])
    ])
  ],
})
export class GameHubComponent {

}
