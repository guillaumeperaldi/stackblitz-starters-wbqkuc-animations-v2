import { Component } from '@angular/core';
import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import {
  AnimationPhaseName,
  slideInAnimation,
  slideOutAnimation,
} from '../animations/animations';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('panelAnimation', [
      transition(':enter', [useAnimation(slideInAnimation)]),
      transition(':leave', [useAnimation(slideOutAnimation)]),
    ]),
    trigger('enabledStateChange', [
      state(
        'start',
        style({
          background: 'red',
        })
      ),
      state(
        'done',
        style({
          background: 'green',
        })
      ),
      transition('* => *', animate('300ms ease-out')),
    ]),
  ],
})
export class AppComponent {
  debug: any;
  eventState = '';
  showNotifNav = false;
  animationPhase = AnimationPhaseName;
  tab = 'left-pan';

  toggleShowNotifNav(): void {
    this.showNotifNav = !this.showNotifNav;
  }

  panelAnimationStartCallBack(event: AnimationEvent): void {
    this.eventState = event.phaseName;
    // do something on start
    console.log(event.phaseName);
  }

  panelAnimationEndCallBack(event: AnimationEvent): void {
    this.eventState = event.phaseName;
    // do something on end
    console.log(event.phaseName);
  }
}
