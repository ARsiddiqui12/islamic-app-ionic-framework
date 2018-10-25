import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';

import { HolyquranPage } from '../holyquran/holyquran';
import { AhadeesPage } from '../ahadees/ahadees';
import { NamazPage } from '../namaz/namaz';
import { KalimasPage } from '../kalimas/kalimas';
import { DuroodSharifPage } from '../durood-sharif/durood-sharif';
import { AboutAppPage } from '../about-app/about-app';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  public HolyquranPage = HolyquranPage;
  
  public AhadeesPage = AhadeesPage;
  
  public NamazPage = NamazPage;
  
  public KalimasPage = KalimasPage;
  
  public DuroodSharifPage = DuroodSharifPage;
  
  public AboutAppPage = AboutAppPage;
  

  constructor(public navCtrl: NavController,public loadingController:LoadingController) {

  }

  ionViewDidLoad(){
   let loadingContent = this.loadingController.create({
    content:"Loading Content From Server."
   });
   loadingContent.present();

   loadingContent.dismiss();
     
  }

  

  

}
