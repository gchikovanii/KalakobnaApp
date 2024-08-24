import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { GameHubComponent } from './game-hub/game-hub.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'game-hub', component: GameHubComponent },
    { path: '**', component: NotFoundComponent }
];
