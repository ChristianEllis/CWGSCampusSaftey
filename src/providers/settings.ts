import { NgModule} from '@angular/core';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
@Injectable()
export class Settings {
  private SETTINGS_KEY: string = '_settings';

  settings: any;

  _defaults: any;
  _readyPromise: Promise<any>;

  constructor(
    public storage: Storage,
    defaults: any) {
      this._defaults = defaults;
  }

  load() {
    return this.storage.get(this.SETTINGS_KEY)
      .then( (value) => {
        if (value) {
          this.settings = value;
          return this._mergeDefaults(this._defaults);
        }
        else {
          return this.setAll(this._defaults)
            .then((val) => {
              this.settings = val;
            })
        }
      });
  }

  _mergeDefaults(defaults: any) {
    for (let k in defaults) {
      if (!(k in this.settings))
        this.settings[k] = defaults[k];
    }
    return this.setAll(this.settings);
  }

  merge(settings: any) {
    for (let k in settings) {
      this.settings[k] = settings[k];
    }
    return this.save();
  }

  setValue(key: string, value: any) {
    this.settings[key] = value;
    return this.storage.set(this.SETTINGS_KEY, this.settings);
  }

  setAll(value: any) {
    return this.storage.set(this.SETTINGS_KEY, value);
  }

  getValue(key: string) {
    return this.storage.get(this.SETTINGS_KEY)
      .then( (settings) => {
        try{
          return settings[key];
        }
        catch(e){
          console.log("Unable to find settings! Resorting to defaults");
          this.load();
          return true; //return true so that tut page is always shown
        }
      });
  }

  save() {
    return this.setAll(this.settings);
  }

  get allSettings() {
    return this.settings;
  }
}
