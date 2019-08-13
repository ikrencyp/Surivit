import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScrollToService, ScrollToConfigOptions, ScrollToAnimationEasing } from '@nicky-lenaers/ngx-scroll-to';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

import { CONSTANTS } from '@app/configurations/constants';
import { FILE_PATH } from '@app/configurations/file-path';
import { TRANSLATE } from '@app/configurations/translate';

@Component({
  selector: 'surivit-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navigationMenu', { static: true })
  navigationMenu: ElementRef;

  CONSTANTS = CONSTANTS;
  FILE_PATH = FILE_PATH;
  TRANSLATE = TRANSLATE;

  positionInitialBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  valueAttrButtonNavigationMenu = 'button-navigation-menu';
  pages: string[];
  $positionInitial: Observable<boolean>;

  constructor(
    public router: Router,
    public translateService: TranslateService,
    private scrollToService: ScrollToService
  ) { }

  ngOnInit(): void {
    console.log('..++ HeaderComponent => ngOnInit ++..');
    this.pages = Object.keys(CONSTANTS.PAGES.UNAUTHENTICATED);
    this.$positionInitial = this.positionInitialBehaviorSubject.asObservable();
    this.router.events.subscribe((result: any) => {
      if (result instanceof NavigationEnd) {
        console.log('..:: NavigationEnd: ', result);
        this.getSubjectValue();
        const scrollToConfigOptions: ScrollToConfigOptions = {
          offset: -1 * window.pageYOffset,
          duration: CONSTANTS.SCROLL_TO_CONFIG_OPTIONS.DURATION,
          easing: CONSTANTS.SCROLL_TO_CONFIG_OPTIONS.EASING as ScrollToAnimationEasing
        };
        this.scrollToService.scrollTo(scrollToConfigOptions);
      }
    });
  }

  @HostListener('window:resize')
  onResize() {
    if (CONSTANTS.DISPLAY.DIGEST < window.innerWidth) {
      const htmlButtonElement: HTMLButtonElement = this.navigationMenu.nativeElement as HTMLButtonElement;
      if ('true' === htmlButtonElement.getAttribute('aria-expanded')) {
        htmlButtonElement.click();
      }
      this.getSubjectValue();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.getSubjectValue();
  }

  @HostListener('document:click', ['$event'])
  onWindowClick(event: MouseEvent) {
    if (CONSTANTS.DISPLAY.DIGEST >= window.innerWidth) {
      const htmlElement: HTMLElement = event.target as HTMLElement;
      if (this.valueAttrButtonNavigationMenu !== htmlElement.getAttribute('button-menu')) {
        const htmlButtonElement: HTMLButtonElement = this.navigationMenu.nativeElement as HTMLButtonElement;
        if ('true' === htmlButtonElement.getAttribute('aria-expanded')) {
          htmlButtonElement.click();
        }
      }
      this.getSubjectValue();
    }
  }

  private getSubjectValue(): void {
    this.positionInitialBehaviorSubject.next(this.positionInitial(window.pageYOffset));
  }

  private positionInitial(pageYOffset: number): boolean {
    const htmlButtonElement: HTMLButtonElement = this.navigationMenu.nativeElement as HTMLButtonElement;
    return 'true' !== htmlButtonElement.getAttribute('aria-expanded')
      && this.router.url.includes(CONSTANTS.PAGES.UNAUTHENTICATED.HOME.PATH) && 50 > pageYOffset;
  }

}
