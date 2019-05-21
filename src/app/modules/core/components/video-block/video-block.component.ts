import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-video-block',
  template: `
    <video autoplay loop src="../../../../../assets/resources/1235_bg.mp4" id="video-bg"></video>
    <div id="overlay"></div>
  `,
  styleUrls: ['./video-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoBlockComponent {
}
