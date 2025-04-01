import { Component } from '@angular/core';


const counterInit: number = 10;

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>


  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>`
})

export class CounterComponent {
  constructor() { }

  public counter: number = counterInit;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = counterInit;
  }
}
