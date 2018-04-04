//Angular / Ionic
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//Pages

//Services

//Interfaces
import { Slide } from '../../../models/slide';

@Component({
  selector: "page-just-assaulted",
  templateUrl: "just-assaulted.html",
})

export class JustAssaultedPage {
  slides: Slide[];

  constructor(private translate: TranslateService){
    translate.get([
      "JUST_ASSAULTED_SLIDE1_TITLE",
      "JUST_ASSAULTED_SLIDE1_DESCRIPTION",
      "JUST_ASSAULTED_SLIDE2_TITLE",
      "JUST_ASSAULTED_SLIDE2_DESCRIPTION",
      "JUST_ASSAULTED_SLIDE3_TITLE",
      "JUST_ASSAULTED_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        this.slides = [
          {
            id: 1,
            title: values.JUST_ASSAULTED_SLIDE1_TITLE,
            description: values.JUST_ASSAULTED_SLIDE1_DESCRIPTION,
            image: '../assets/img/home.png',
          },
          {
            id: 2,
            title: values.JUST_ASSAULTED_SLIDE2_TITLE,
            description: values.JUST_ASSAULTED_SLIDE3_DESCRIPTION,
            image: '../assets/img/hospital.png',
          },
          {
            id: 3,
            title: values.JUST_ASSAULTED_SLIDE3_TITLE,
            description: values.JUST_ASSAULTED_SLIDE3_DESCRIPTION,
            image: '../assets/img/counseling.png',
          },
        ]
      });
  }

}
