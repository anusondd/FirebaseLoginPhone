import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Facebook } from '@ionic-native/facebook';

import firebase from 'firebase';

firebase.initializeApp({

  apiKey: "AIzaSyCzsh6DfCUvM0cAT0o8YP8A69P3d5Biklk",
  authDomain: "fir-crud-a8259.firebaseapp.com",
  databaseURL: "https://fir-crud-a8259.firebaseio.com",
  projectId: "fir-crud-a8259",
  storageBucket: "fir-crud-a8259.appspot.com",
  messagingSenderId: "154786789097"

});

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}
