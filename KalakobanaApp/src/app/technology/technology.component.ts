import { Component ,ElementRef, HostListener, inject,} from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css',
  animations: [
    trigger('slideUpFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
})
export class TechnologyComponent {
  el = inject(ElementRef);
  isVisible = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      this.isVisible = true;
    }
  }
}
