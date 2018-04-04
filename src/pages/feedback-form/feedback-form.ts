//Library Imports
import { NavController ,AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NativeDeviceFeatures } from '../../providers/native-device-features';

//For HTTP
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operators/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';


@Component({
  selector: 'page-feedback-form',
  templateUrl: 'feedback-form.html',
})
export class FeedbackFormPage {
  messageInput: String;
  nameInput: String;
  emailInput: String;
  phoneInput: String;

  disabled: boolean;
  postRequestObservable: Observable<any>;
  userPlatform: String;

  constructor(
    private http: HttpClient,
    private nativeDeviceFeatures: NativeDeviceFeatures,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) { }

  // *Create body and send a POST request
  sendData(){
    this.disabled = true; //disable the button
    if(!this.messageInput) {
      this.feedbackModalNoInput();
      return;
    }
    //setup the body of the request
    let body = {
        message: this.messageInput,
        name: this.nameInput,
        email: this.emailInput,
        phone: this.phoneInput,
        sentFrom: "Sent from " + this.nativeDeviceFeatures.getPlatform() + " Ionic App"
    };
    //setup the observable to be returned by the sever
    this.postRequestObservable = this.http.post('http://campussaftey.us-east-1.elasticbeanstalk.com/api/feedbackform/', body)
    .catch((err) => {
      Observable.throw(new Error('Unable To Send Message'));
      return Observable.of(err);
    });
    this.postRequestObservable.subscribe(
      data => { },
      error => this.feedbackModalFailure(),
      () => this.feedbackModalSuccess()
    );
  }

  //* Popup Modal for POST Success(Status = 200)
  feedbackModalSuccess() {
    const alert =  this.alertCtrl.create({
      title: "Feedback Sent",
      message: "Thanks for helping us make our app better!",
      buttons: [
        {
          text: 'Close',
          handler: () => {
            this.navCtrl.popToRoot({animate: false});
          }
        },
      ]
    })
    alert.present();
  }

  // *Popup Modal for when POST failure (Status = 0)
  feedbackModalFailure() {
    const alert =  this.alertCtrl.create({
      title: "Feedback Not Sent",
      message: "Unable to send your feedback. Please make sure that you have an active wi-fi or data connection, then try again.",
      buttons: [
        {
          text: 'Close',
          handler: () => {
            this.navCtrl.pop();
          }
        },
      ]
    })
    alert.present();
  }

  // *Popup Modal for when no input but still tap button
  feedbackModalNoInput() {
    const alert =  this.alertCtrl.create({
      title: "Feedback Not Sent",
      message: "You must atleast enter text in the comments box to send feedback.",
      buttons: [
        {
          text: 'Close',
          handler: () => {
            this.disabled = false;
          }
        },
      ]
    })
    alert.present();
  }
}
