import { Component } from '@angular/core';

import { NativeDeviceFeatures } from './../../../providers/native-device-features';

import { Hospital } from './../../../models/resources-list/hospital.interface';
import hospitals from './../../../models/resources-list/hospital-data'

@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html',
})
export class HospitalPage{
  hospitalCollection: Hospital[];

  constructor(private nativeDeviceFeatures:NativeDeviceFeatures) {
    this.hospitalCollection = hospitals;
  }

}
