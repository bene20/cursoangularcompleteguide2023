import { EventEmitter, Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class CounterService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  incrementActiveToInactiveCounter() {
    this.activeToInactiveCounter++;
    console.log('this.activeToInactiveCounter: ' + this.activeToInactiveCounter);
  }

  incrementInactiveToActiveCounter() {
    this.inactiveToActiveCounter++;
    console.log('this.inactiveToActiveCounter: '+this.inactiveToActiveCounter);
  }
}
