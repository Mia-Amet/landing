import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `    
    <div class="container-fluid">
      <app-menu></app-menu>
      <router-outlet></router-outlet>
    </div>
    <!-- /.container-fluid -->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
