import { Component } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  choicesDisplay: Choice[];

  constructor() {
    this.choicesDisplay = [
      new Choice(
        'China',
        'Vietnam',
        'Thailand',
        'Argentina',
        'argentina-flag.gif'
      ),
      new Choice('Cheese', 'Milk', 'Butter', 'Jello', 'jello.gif'),
      new Choice('Telegram', 'Facebook', 'Instagram', 'Youtube', 'youtube.gif'),
      new Choice('Violin', 'Guitar', 'Trumpet', 'Bass Guitar', 'trumpet.gif'),
      new Choice('Low', 'Now', 'How', 'Cow', 'low.gif'),
      new Choice('See', 'Bird', 'Shot', 'Airplane', 'airplane.gif'),
      new Choice('Eighty', 'Seven', 'Eleven', 'Nineteen', 'eighty.gif'),
      new Choice('Shirt', 'Trousers', 'Shorts', 'Skirt', 'shirt.gif'),
      new Choice('July', 'October', 'September', 'December', 'july.gif'),
      new Choice('India', 'Sweden', 'Spain', 'France', 'india.gif'),
      new Choice('Vexed', 'Angry', 'Relaxed', 'Mad', 'relaxed.gif'),
      new Choice('Hat', 'Eggs', 'Teeth', 'Feet', 'hat.gif'),
      new Choice('Yucatan', 'Bayern', 'Monterrey', 'Texas', 'monterrey.gif'),
      new Choice(
        'Liverpool',
        'Tottenham',
        'Real Madrid',
        'Manchester United',
        'real-madrid.gif'
      ),
      new Choice('Boing', 'Fanta', 'Coca-Cola', 'Toni Col', 'boing.gif'),
      new Choice('Speak', 'Smell', 'Listen', 'Kick', 'kick.gif'),
      new Choice('Tiger', 'Cat', 'Fox', 'Lion', 'fox.gif'),
      new Choice('Switzerland', 'Spain', 'Singapore', 'Taiwan', 'taiwan.gif'),
      new Choice('Tangerine', 'Melon', 'Apple', 'Banana', 'melon.gif'),
      new Choice('Barcelona', 'Seoul', 'London', 'New York', 'new-york.gif'),
      new Choice('Hi', 'Good Morning', 'Bye', 'Hello', 'bye.gif'),
      new Choice('Orange', 'Carrot', 'Pumpkin', 'Grape', 'grape.gif'),
      new Choice('Ten', 'Third', 'First', 'Last', 'ten.gif'),
      new Choice(
        'Tamaulipas',
        'Veracruz',
        'Sinaloa',
        'Zacatecas',
        'zacatecas.gif'
      ),
    ];
  }
}

export class Choice {
  choiceOne: string;
  choiceTwo: string;
  choiceThree: string;
  choiceFour: string;
  gif: string;

  constructor(
    choiceOne: string,
    choiceTwo: string,
    choiceThree: string,
    choiceFour: string,
    gif: string
  ) {
    this.choiceOne = choiceOne;
    this.choiceTwo = choiceTwo;
    this.choiceThree = choiceThree;
    this.choiceFour = choiceFour;
    this.gif = gif;
  }
}
