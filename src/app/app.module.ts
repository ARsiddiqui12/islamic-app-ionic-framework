import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { HolyquranPage } from '../pages/holyquran/holyquran';
import { AhadeesPage } from '../pages/ahadees/ahadees';
import { NamazPage } from '../pages/namaz/namaz';
import { KalimasPage } from '../pages/kalimas/kalimas';
import { DuroodSharifPage } from '../pages/durood-sharif/durood-sharif';
import { AboutAppPage } from '../pages/about-app/about-app';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HolyQuranProvider } from '../providers/holy-quran/holy-quran';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AhadeesProvider } from '../providers/ahadees/ahadees';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';



import { Pro } from '@ionic/pro';

Pro.init('fb279418', {
  appVersion: '0.0.1'
});


@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HolyquranPage,
    AhadeesPage,
    NamazPage,
    KalimasPage,
    DuroodSharifPage,
    AboutAppPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HolyquranPage,
    AhadeesPage,
    NamazPage,
    KalimasPage,
    DuroodSharifPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HolyQuranProvider,
    AhadeesProvider,
    SocialSharing
  ]
})
export class AppModule {}
