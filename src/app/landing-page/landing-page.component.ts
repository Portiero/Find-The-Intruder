import { Component } from '@angular/core';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  isHidden: boolean = false;
  constructor() {}

  toogleVisibility() {
    this.isHidden = !this.isHidden;
  }
}
