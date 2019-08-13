import { Component, OnInit, Inject } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

import { FADE_ANIMATION } from './unauthenticated/animations/fade.animation';

import { TRANSLATE } from './configurations/translate';

@Component({
  selector: 'surivit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [FADE_ANIMATION]
})
export class AppComponent implements OnInit {

  constructor(
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    console.log('..++ AppComponent => ngOnInit ++..');
    this.languageManagement();
  }

  getRouterOutletState(routerOutlet: RouterOutlet): ActivatedRoute {
    return routerOutlet && routerOutlet.isActivated ? routerOutlet.activatedRoute : null;
  }

  private languageManagement(): void {
    const keyLangs = Object.keys(TRANSLATE.LANGUAGE);
    const langs: string[] = [];
    for (const lang of keyLangs) {
      langs.push(TRANSLATE.LANGUAGE[lang]);
    }
    this.translateService.addLangs(langs);
    if (!this.translateService.currentLang) {
      this.translateService.setDefaultLang(TRANSLATE.LANGUAGE.TH);
    }
    this.translateService.use(this.translateService.getDefaultLang());
    this.translateService.currentLang = this.translateService.getDefaultLang();
    this.document.documentElement.lang = this.translateService.currentLang;
    console.log('..:: Current Language: ', this.translateService.currentLang);
    this.translateService.onLangChange.subscribe((langChangeEvent: LangChangeEvent) => {
      console.log('.. :: Translate Service Lang Change Event: ', langChangeEvent);
      this.document.documentElement.lang = langChangeEvent.lang;
    });
  }

}
