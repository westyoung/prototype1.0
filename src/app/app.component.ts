import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = 'HomePage';
  
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

  /*constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
    });*/

    this.pages = [  // sidemenu에서 나타내는 각각의 page를 navigation함.
      { title: 'Home', component: 'HomePage' },
      { title: '재고 관리', component: 'ButtonPage' },
      { title: '이력 조회', component: 'InputPage'},
      { title: 'delete test', component: 'DeletePage'}, 
      { title: 'login', component: 'LoginPage'},
      { title: 'register', component: 'RegisterPage'}
    ];
  }

  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

