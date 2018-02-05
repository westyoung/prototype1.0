
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPage } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import firebase from 'firebase'
import 'firebase/firestore';


import { MyApp } from './app.component';

var config = {
  apiKey: "AIzaSyBu8bxF678oClgMSV2O039fu0keVlYO50I",
    authDomain: "nfcproject-ebfc6.firebaseapp.com",
    databaseURL: "https://nfcproject-ebfc6.firebaseio.com",
    projectId: "nfcproject-ebfc6",
    storageBucket: "",
    messagingSenderId: "1083380389950"
};


firebase.initializeApp(config);
@IonicPage()
@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
  
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
