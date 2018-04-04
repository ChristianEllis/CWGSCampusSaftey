//Library Imports
import { NavController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';

//Page Imports
import { SettingsPage } from './../settings/settings';
import { JustAssaultedPage } from './just-assaulted/just-assaulted';
import { HospitalPage } from './hospital/hostpital';
import { PoliceStationPage } from './police-station/police-station';
import { OnCampusHelpPage } from './on-campus-help/on-campus-help';
import { CounselingPage } from './counseling/counseling';


@Component({
  selector: 'page-resource-list',
  templateUrl: 'resource-list.html'
})
export class ResourceList {
  settingsPage = SettingsPage;
  justAssaultedPage = JustAssaultedPage;
  hospitalPage = HospitalPage;
  policeStationPage = PoliceStationPage;
  onCampusHelpPage = OnCampusHelpPage;
  counselingPage = CounselingPage;

  constructor(private navCtrl:NavController, private alertCtrl: AlertController) { }

  viewAmnestyPolicy() {
    const alert =  this.alertCtrl.create({
      title: "Amnesty Policy",
      message: "If the person who has been victimized and who is or was under the influence of alcohol or drugs or in violation of any other Code of Conduct violation at either the time of the incident or at the time s/he makes the report, s/he will not be charged with an alcohol or drug violation (unless involving distribution) either through the criminal or University Student Conduct Process.",
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log("leaving");
          }
        },
      ]
    })
    alert.present();
  }

  viewTitleIX() {
    const alert = this.alertCtrl.create({
      title: 'Title IX',
      subTitle: 'What is it?',
      message: 'No person in the United States shall, on the basis of sex, be excluded from participation in, be denied the benefits of, or be subjected to discrimination under any education program or activity receiving Federal financial assistance.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log("leaving");
          }
        },
      ]
    });
    alert.present();
  }
}
