import { Component } from '@angular/core';

import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor (private translate: TranslateService) {
    translate.addLangs(["en", "jp"]);
    translate.setDefaultLang("en");

    let browserlang = translate.getBrowserLang();
  // translate.use(browserlang.match(/en|jp/) ? browserlang: "en")
     translate.use('jp')




    
  }
    changeLanguage(lang){
      this.translate.use(lang);
    }

  }

