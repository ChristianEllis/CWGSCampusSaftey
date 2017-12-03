import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { Settings } from '../../providers/settings';

import { TranslateService } from '@ngx-translate/core';
import { ChangeUniversityPage } from '../choose-university/change-university';

/*
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 */
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  changeUniversityPage =ChangeUniversityPage;

  // Our local settings object
  options: any;

  settingsReady = false;

  form: FormGroup;

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  constructor(
    public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService) {
  }

  _buildForm() {
    let group: any = {
      enableIntroPage: [this.options.enableIntroPage],
    }
    this.form = this.formBuilder.group(group);

    // Watch the form for changes
    this.form.valueChanges
      .subscribe( (v) => {
        this.settings.merge(this.form.value);
      });
  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});
  }

  ionViewWillEnter() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

    this.translate.get(this.pageTitleKey)
      .subscribe((res) => {
        this.pageTitle = res;
    })

    this.settings.load()
      .then(() => {
        this.settingsReady = true;
        this.options = this.settings.allSettings;
        this._buildForm();
      });
  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }
}
