//Ionic & Angular
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//Pages
//import { PrivacyPolicyPage } from '../legal/privacy-policy/privacy-policy';
import { TermsOfServicePage } from '../legal/terms-of-service/terms-of-service';
import { UniversityListPage } from './university-list/university-list';
//Services
import { Settings } from '../../providers/settings';
//Model
import { University } from '../../models/university-interface';
import schoolInfo from './../../models/university-info';

@Component({
  selector: "page-change-university",
  templateUrl: "change-university.html"
})

export class ChangeUniversityPage{
  //privacyPolicy = PrivacyPolicyPage;
  termsOfServicePage = TermsOfServicePage;
  schoolList = UniversityListPage;
  currentUniversity: University = {
    name: "",
    address: "",
    phone: "",
    logo: ""
  }; //instantiate empty object (since you cant instantiate an interface)

  constructor(private settings: Settings) {
  }

  //use this lifecycle so that the values are reloaded every time(incase the school is changed)
  ionViewWillEnter() {
    //get the current university value and show it
    this.settings.getValue("university")
    .then( (university) => {
      this.setValues(university);
    })
  }

  getImage() {
    return this.currentUniversity.logo
  }

  setValues(university: University) {
    this.currentUniversity.name = university.name;
    this.currentUniversity.logo = university.logo;
  }
}
