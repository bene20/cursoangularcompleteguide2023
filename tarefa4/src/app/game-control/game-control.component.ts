import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  lastFired: number = 0;
  interval: any;

  onStartGame(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastFired++);
    }, 1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }
}
