import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HelpPage } from '../help/help';
import { ResourceList } from './../resources-list/resource-list';
import { QuestionAnswerList } from './../question-answer-list/question-answer-list';
import { SettingsPage } from './../settings/settings';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //tab1Root: any = HelpPage;
  tab2Root: any = ResourceList;
  tab3Root: any = QuestionAnswerList;
  tab4Root: any = SettingsPage;

 // tab1Title = " ";
  tab2Title = "Resources";
  tab3Title = "Education";

  constructor(public navCtrl: NavController) {
  }
}
