import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Directive({
  selector: 'on-scroll',
  exportAs: 'onscroll'
})
export class ScrollDirective {
  private _sections: string[] = [ 'intro', 'features', 'usage' ];

  private scrollState: BehaviorSubject<boolean> = new BehaviorSubject(false);
  scroll: Observable<boolean> = this.scrollState.asObservable().pipe(
    distinctUntilChanged()
  );

  private currentFragment: BehaviorSubject<string> = new BehaviorSubject(null);
  fragment: Observable<string> = this.currentFragment.asObservable().pipe(
    distinctUntilChanged()
  );

  constructor(
    @Inject(DOCUMENT) private doc: any
  ) { }

  get sections(): string[] {
    return [ ...this._sections ];
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    this.scrollState.next(window.pageYOffset > 0);

    const navbar  = this.doc.getElementById('app-navbar');
    const sections = this.mapSections();

    window.pageYOffset >= sections[0].element.offsetTop - 100 ? navbar.classList.add('bg-visible') :
      navbar.classList.remove('bg-visible');

    sections.forEach(section => {
      if (window.pageYOffset < section.element.offsetTop + section.element.clientHeight - 1 &&
        window.pageYOffset >= section.element.offsetTop - 100) this.currentFragment.next(section.value);
    });

    if (window.pageYOffset >= sections[sections.length - 2].element.offsetTop + sections[sections.length - 2].element.clientHeight)
      this.currentFragment.next(sections[sections.length - 1].value);
    if (window.pageYOffset < sections[0].element.offsetTop - 100) this.currentFragment.next(null);
  }

  private mapSections(): { value: string, element: HTMLElement }[] {
    return this._sections.map(section => {
      return {
        value: section,
        element: this.doc.getElementById(section)
      }
    });
  }
}
