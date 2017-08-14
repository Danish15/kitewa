import { Component, OnInit, OnDestroy } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private subscription: Subscription;

  constructor (private translate: TranslateService, private activatedRoute: ActivatedRoute) {
    translate.addLangs(["en", "jp"]);
    translate.setDefaultLang("en");

    let browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/en|jp/) ? browserlang: "en")

    
  }
    changeLanguage(lang){
      this.translate.use(lang);
    }

    NgOnit() {
      this.subscription = this.activatedRoute.queryParams.subscribe(
        (param:any) => {
          let locale  = param ['locale'];
          if (locale !== undefined) {
            this.translate.use (locale)
          }
        }
      )
    }

    NgOnDestroy(){
      this.subscription.unsubscribe();
    }

  }

