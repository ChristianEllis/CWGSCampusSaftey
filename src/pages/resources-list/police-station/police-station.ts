import { Component } from '@angular/core';

import { NativeDeviceFeatures } from './../../../providers/native-device-features';

import { PoliceStation } from './../../../models/resources-list/police-station.interface';
import policeStations from './../../../models/resources-list/police-station-data';

@Component({
  selector: 'page-police-station',
  templateUrl: 'police-station.html'
})
export class PoliceStationPage{
  policeStationCollection: PoliceStation[];

  constructor(private nativeDeviceFeatures:NativeDeviceFeatures){
    this.policeStationCollection = policeStations;
  }

}
