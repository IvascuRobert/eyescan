import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'it']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();

    if (browserLang) {
      translate.use(browserLang.match(/en|it/) ? browserLang : 'en');
    }
  }
}
