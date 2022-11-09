import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bare-bones';

  isHidden: boolean = false;
  constructor() {}

  toogleVisibility() {
    this.isHidden = !this.isHidden;
  }
}
