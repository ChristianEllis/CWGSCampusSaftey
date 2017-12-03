//Angular / Ionic
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//Pages
import { TabsPage } from '../tabs/tabs';
import { UniversityListPage } from '../choose-university/university-list/university-list';
import { TermsOfServicePage } from '../legal/terms-of-service/terms-of-service';
//import { PrivacyPolicyPage } from '../legal/privacy-policy/privacy-policy';

//Services
import { Settings } from '../../providers/settings';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  termsOfServicePage = TermsOfServicePage;
  //privacyPolicyPage = PrivacyPolicyPage;

  constructor(private navCtrl: NavController, private settings: Settings) {
    //Change the "enable intro page" setting to false, so that this page is only the root this one time
    this.settings.load()
    .then( () => {
      this.settings.setValue("enableIntroPage", false)
    });
  }

  startApp() {
    this.navCtrl.setRoot(TabsPage, {}, {
      animate: false
    });
    this.navCtrl.push(UniversityListPage);
  }
}
