import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import firebase from 'firebase';
import { PhoneNumber } from '../../model/phoneNumber';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{

  PhoneNumber = {} as PhoneNumber;
  countryCode:string;
  phoneNumber:string;

  recaptchaVerifier:firebase.auth.RecaptchaVerifier;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) 
  {
    //this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  ngOnInit(){
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  ionViewDidLoad() {
    this.PhoneNumber.countryCode = '+66';
    this.PhoneNumber.phoneNumber = '940282690';
    console.log('ionViewDidLoad LoginPage');
    
    
    
  }

  signIn(PhoneNumber: PhoneNumber){
    //this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.countryCode = this.PhoneNumber.countryCode;
    this.phoneNumber =  this.PhoneNumber.phoneNumber;
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString =  this.countryCode + this.phoneNumber;
    console.log(phoneNumberString);
  
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then( confirmationResult => {
        let prompt = this.alertCtrl.create({
          title: 'Enter the Confirmation code',
          inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
          buttons: [
            { text: 'Cancel',
              handler: data => { console.log('Cancel clicked'); }
            },
            { text: 'Send',
              handler: data => {
                confirmationResult.confirm(data.confirmationCode)
                .then(function (result) {
                  // User signed in successfully.
                  console.log(result.user);
                  
                  this.navCtrl.push('HomePage');
                  
                  // ...
                }).catch(function (error) {
                  // User couldn't sign in (bad verification code?)
                  // ...
                });
                
              }
            }
          ]
        });
        prompt.present();
        
    })
    .catch(function (error) {
      console.error("SMS not sent", error);
    });
  
  }

  

}
