import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameLogicService {
  constructor() {}

  choiceCheck(gif: string, choice: string) {
    let gifCheck = gif.slice(0, 3);
    let choiceCheck = choice.slice(0, 3).toLowerCase();
    if (gifCheck === choiceCheck) {
      return true;
    } else {
      return false;
    }
  }

  falseCheck(gif: string, choice: string) {
    let gifCheck = gif.slice(0, 3);
    let choiceCheck = choice.slice(0, 3).toLowerCase();
    if (gifCheck !== choiceCheck) {
      return true;
    } else return;
  }
}
