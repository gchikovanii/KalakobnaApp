import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  animations: [
    trigger('zoomFade', [
      transition(':enter', [
        animate('800ms ease-out', keyframes([
          style({ opacity: 0, transform: 'scale(0.9)', offset: 0 }),
          style({ opacity: 1, transform: 'scale(1)', offset: 1.0 }),
        ]))
      ])
    ])
  ],
})
export class AboutUsComponent {
  shortText: string = '';
  fullText: string = '';

  isTextExpanded: boolean = false;
  isVisible = false;
  translateSubscription: Subscription;

  constructor(private translate: TranslateService) {
    // Initial text loading
    this.loadTranslations();

    // Subscribe to language change event to update text dynamically
    this.translateSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  // Function to load translations
  loadTranslations() {
    this.translate.get('AboutUs.ShortText').subscribe((translation: string) => {
      this.shortText = translation;
    });

    this.translate.get('AboutUs.fullText').subscribe((translation: string) => {
      this.fullText = this.shortText + translation;
    });
  }

  // Clean up subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.translateSubscription) {
      this.translateSubscription.unsubscribe();
    }
  }


  el = inject(ElementRef);
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      this.isVisible = true;
    }
  }

  toggleText() {
    this.isTextExpanded = !this.isTextExpanded;
  }
}
