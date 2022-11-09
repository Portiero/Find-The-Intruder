import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardComponent } from './card/card.component';
import { GameLogicService } from './game-logic.service';
import { CardChildComponent } from './card-child/card-child.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'cards-container', component: CardsContainerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CardsContainerComponent,
    CardComponent,
    CardChildComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [GameLogicService],
  bootstrap: [AppComponent],
})
export class AppModule {}
