import { Component } from '@angular/core';

import { NativeDeviceFeatures } from './../../../providers/native-device-features';

import { Counseling } from './../../../models/resources-list/counseling.interface';
import counselingResources from './../../../models/resources-list/counseling-data';

@Component({
  selector: 'page-counseling',
  templateUrl: 'counseling.html'
})

export class CounselingPage{
  counselingCollection: Counseling[];
  
  constructor(private nativeDeviceFeatures:NativeDeviceFeatures){
    this.counselingCollection = counselingResources;
  }

}