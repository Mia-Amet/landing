import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[videoSize]'
})
export class VideoSizeDirective implements OnInit {
  @HostBinding('style.min-width') width: string;

  constructor(
    private video: ElementRef
  ) { }

  ngOnInit(): void {
    this.updateSize();
  }

  @HostListener('window:resize', ['$event']) onResize(e) {
    this.updateSize();
  }

  private updateSize() {
    if (window.innerHeight > this.video.nativeElement.clientHeight)
      this.width = `${ window.innerWidth + (window.innerWidth * 0.05) }px`;
  }

}

