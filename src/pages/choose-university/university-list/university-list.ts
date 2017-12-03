//Ionic & Angular
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//Pages
//Providers
import { Settings } from '../../../providers/settings';
//Model
import { University } from '../../../models/university-interface';
import schoolInfo from './../../../models/university-info';


@Component({
  selector:"page-university-list",
  templateUrl:"university-list.html"
})

export class UniversityListPage {
  schoolCollection = schoolInfo;

  constructor(private navCtrl: NavController,private settings:Settings) {
  }

  onChosenUniversity(university:University) {
    //set new university
    this.settings.setValue("university",university);
    this.navCtrl.pop();
   }
}
