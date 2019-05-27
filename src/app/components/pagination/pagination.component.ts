import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <on-scroll #s="onscroll"></on-scroll>
    <div *ngIf="s.fragment | async" @fadingAnimation class="pagination-wrapper d-flex flex-column">
      <a *ngFor="let section of s.sections" routerLink="." [fragment]="section"
         [ngClass]="{ 'active': (s.fragment | async) === section }">
        <svg viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg">
          <circle class="circle-stroke" cx="10" cy="10" r="8" fill="none" stroke="rgba(28, 62, 62, 0.35)" 
                  stroke-width="3px" stroke-dasharray="0, 50"/>
          <circle cx="10" cy="10" r="4" fill="rgba(28, 62, 62, 0.35)"/>
        </svg>
      </a>
    </div>
    <!-- /.pagination-wrapper -->
  `,
  styleUrls: ['./pagination.component.scss'],
  animations: [
    trigger('fadingAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.2s ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style('*'),
        animate('.2s ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PaginationComponent {

  constructor() { }

}
