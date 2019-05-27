import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss'],
  animations: [
    // to be provided
  ]
})
export class UsageComponent implements OnInit, OnDestroy {
  playEvent = false;
  steps: string[] = [
    'Set your destination.',
    'Choose the most suitable option from the list of available.',
    'Book your ride, hop in, and relax.'
  ];
  currentSlide: number = 0;
  interval: number;

  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => this.slide(), 4000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  getSlideUrl(i: number): string {
    return `../../../assets/resources/slide-${ i + 1 }.png`;
  }

  slideNext() {
    clearInterval(this.interval);
    this.slide();
    this.interval = setInterval(() => this.slide(), 4000);
  }

  slidePrev() {
    clearInterval(this.interval);
    this.currentSlide = this.currentSlide > 0 ? this.currentSlide - 1 : this.steps.length - 1;
    this.interval = setInterval(() => this.slide(), 4000);
  }

  private slide() {
    this.currentSlide = this.currentSlide < this.steps.length - 1 ? this.currentSlide + 1 : 0;
  }
}
