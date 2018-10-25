import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { HolyquranPage } from '../pages/holyquran/holyquran';
import { AhadeesPage } from '../pages/ahadees/ahadees';
import { NamazPage } from '../pages/namaz/namaz';
import { KalimasPage } from '../pages/kalimas/kalimas';
import { DuroodSharifPage } from '../pages/durood-sharif/durood-sharif';
import { AboutAppPage } from '../pages/about-app/about-app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Holy Quran', component: HolyquranPage },
      { title: 'Ahadees', component:AhadeesPage},
      { title: 'Namaz', component:NamazPage},
      { title: 'Kalimaas', component:KalimasPage},
      { title: 'Durood Sharif', component:DuroodSharifPage},
      { title: 'About App', component:AboutAppPage}
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
