import { Component } from '@angular/core';
import { TimerComponent } from './components/timer/timer.component';
import { HeaderComponent } from './components/header/header.component';
import { LinksComponent } from './components/links/links.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimerComponent, HeaderComponent, LinksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pomodoro';
}
