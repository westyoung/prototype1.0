
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPage } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import firebase from 'firebase'
import 'firebase/firestore';


import { MyApp } from './app.component';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2/firebase.app.module';
import { AngularFireModule } from 'angularfire2';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common/src/common_module';



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
    RegisterPage,
    HomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    AngularFireModule.initializeApp(config), 
    AngularFireAuthModule, 
    AngularFireModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    HomePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
