import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `    
    <div class="container-fluid d-flex flex-column flex-nowrap m-0 p-0">
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
    </div>
    <!-- /.container-fluid -->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

}
