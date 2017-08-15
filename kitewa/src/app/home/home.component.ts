import { Component,} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
import {OnInit, OnDestroy} from "@angular/core";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private subscription: Subscription;

  constructor (private translate: TranslateService, private activatedRoute: ActivatedRoute) {
    translate.addLangs(["en", "ja"]);
    translate.setDefaultLang("en");

      let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ja/) ? browserLang : 'en');

  }
    changeLanguage(lang){
      this.translate.use(lang);
    }

    ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        let locale = param['locale'];
        if (locale !== undefined){
            this.translate.use(locale);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
