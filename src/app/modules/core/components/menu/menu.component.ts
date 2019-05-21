import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  languages: string[] = ['en', 'in'];
  currentUrl: Observable<string>;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUrl = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => this.router.routerState.snapshot.url.slice(1))
    );
  }

  navigateToDrivers() {
    this.router.navigate(['/become-a-driver']);
  }
}
