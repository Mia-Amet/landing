import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ScrollDirective } from '../../directives/scroll.directive';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ transform: 'translateY(50%)' }),
        animate('.5s ease-out', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        style('*'),
        animate('.5s ease-in', style({ transform: 'translateY(50%)' }))
      ])
    ])
  ]
})
export class IntroComponent implements OnInit {
  @ViewChild('s') scrollDirective: ScrollDirective;

  constructor() { }

  ngOnInit() {}

}
