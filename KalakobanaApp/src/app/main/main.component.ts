import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { PlusesComponent } from "../pluses/pluses.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { TechnologyComponent } from "../technology/technology.component";
import { TeamComponent } from "../team/team.component";
import { NewsletterComponent } from "../newsletter/newsletter.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [HeroComponent, PlusesComponent, AboutUsComponent, TechnologyComponent, TeamComponent, NewsletterComponent]
})
export class MainComponent {

}
