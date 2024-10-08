import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroComponent } from "./hero/hero.component";
import { NewsletterComponent } from "./newsletter/newsletter.component";
import { FooterComponent } from "./footer/footer.component";
import { PlusesComponent } from "./pluses/pluses.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { TechnologyComponent } from "./technology/technology.component";
import { TeamComponent } from "./team/team.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoaderComponent } from "./loader/loader.component";
import { ScrollToTopComponent } from "./scroll-to-top/scroll-to-top.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, HeroComponent, NewsletterComponent, FooterComponent, PlusesComponent, AboutUsComponent, TechnologyComponent,
    TranslateModule, TeamComponent, LoaderComponent, ScrollToTopComponent]
})
export class AppComponent {
  isLoading = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); 
  }
}
