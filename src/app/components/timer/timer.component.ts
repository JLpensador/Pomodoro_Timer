import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  workTime: number = 25 * 60;
  breakTime: number = 5 * 60;
  timeLeft: number = this.workTime;
  isWorking: boolean = true;
  isRunning: boolean = false;
  interval: any;

  constructor() {}

  ngOnInit(): void {}

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.switchMode();
        }
      }, 1000);
    }
  }

  stopTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  resetTimer() {
    this.stopTimer();
    this.timeLeft = this.isWorking ? this.workTime : this.breakTime;
  }

  switchMode() {
    this.isWorking = !this.isWorking;
    this.timeLeft = this.isWorking ? this.workTime : this.breakTime;
  }
}
