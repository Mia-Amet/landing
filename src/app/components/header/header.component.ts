import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="position-absolute" id="overlay"></div>
    <video autoplay loop src="../../../assets/resources/1235_bg.mp4" id="video-bg" class="position-relative" preload videoSize></video>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() { }

}
