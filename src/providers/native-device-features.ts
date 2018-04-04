import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable()
export class NativeDeviceFeatures {
  userPlatform: String;

  constructor(private platform: Platform, private sanitizer:DomSanitizer) { }

  //* Open the native dialer
  onOpenDialer(phoneNumber: string) {
    return "tel:" + phoneNumber;
  }

  // *Open the native maps app
  onOpenMaps(location: string, locationName?:string) {
    let temp = "";
    let ifLocationName = "";
    this.userPlatform = this.getPlatform();

   //if on ios
    if(this.userPlatform == "ios") {
      temp = "maps:?q=" + location;
      return this.sanitizer.bypassSecurityTrustUrl(temp);
    }
    //else must be android or web(dev only)
    else {
      //if a location name is provided, add it to the google maps intent URI
      if(locationName){
        ifLocationName = "(" + locationName + ")"
      }
      temp = "geo:?q=" + location + ifLocationName;
      return this.sanitizer.bypassSecurityTrustUrl(temp);
    }
  }

  // *Find what platform the user is on
  getPlatform(){
    if(this.platform.is('mobileweb')){
      return this.userPlatform = 'mobileweb';
    }
    else if(this.platform.is('ios')) {
      return this.userPlatform = 'ios';
    }
    else if(this.platform.is('android')) {
      return this.userPlatform = 'android';
    }
    else {
      return this.userPlatform = 'unknown';
    }
  }
}
