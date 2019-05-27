import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <div class="container-fluid d-flex flex-column flex-nowrap m-0 p-0">
      <div class="header-wrapper">
        <app-header class="d-flex"></app-header>
      </div>
      <!-- /.header-wrapper -->
      <app-pagination class="position-fixed"></app-pagination>
      <app-intro id="intro"></app-intro>
      <app-features id="features"></app-features>
      <app-usage id="usage"></app-usage>
      <app-subscribe></app-subscribe>
    </div>
    <!-- /.container-fluid -->
  `,
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
