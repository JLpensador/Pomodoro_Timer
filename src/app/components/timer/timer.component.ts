import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  standalone: true,
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

  get formattedTime(): String {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  increaseWorkTime() {
    this.workTime += 60;
    if (!this.workTime && this.isWorking) {
      this.timeLeft = this.workTime;
    }
  }

  decreaseWorkTime() {
    if (this.workTime > 60) {
      this.workTime -= 60;
      if (!this.workTime && this.isWorking) {
        this.timeLeft = this.workTime;
      }
    }
  }

  increaseBreakTime() {
    this.breakTime += 60;
    if (!this.breakTime && !this.isWorking) {
      this.timeLeft = this.breakTime;
    }
  }

  decreaseBreakTime() {
    if (this.breakTime > 60) {
      this.breakTime -= 60;
      if (!this.breakTime && !this.isWorking) {
        this.timeLeft = this.breakTime;
      }
    }
  }
}
