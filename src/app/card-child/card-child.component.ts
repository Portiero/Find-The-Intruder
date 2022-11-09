import { Component, Input } from '@angular/core';
import { GameLogicService } from '../game-logic.service';

@Component({
  selector: 'card-child',
  templateUrl: './card-child.component.html',
  styleUrls: ['./card-child.component.css'],
})
export class CardChildComponent {
  @Input() choiceOne: string = '';
  @Input() choiceTwo: string = '';
  @Input() choiceThree: string = '';
  @Input() choiceFour: string = '';
  @Input() gif: string = '';

  hide: boolean = true;

  constructor(public service: GameLogicService) {}
  toggleVisibility(gif: string) {
    if (gif) {
      this.hide = !this.hide;
    } else return;
  }
}
