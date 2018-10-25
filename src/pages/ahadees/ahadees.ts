import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { AhadeesProvider } from '../../providers/ahadees/ahadees';
/**
 * Generated class for the AhadeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ahadees',
  templateUrl: 'ahadees.html',
})
export class AhadeesPage {

 public AhadeesDataone = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCon:LoadingController,
              public ahadeesprov:AhadeesProvider
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AhadeesPage');

    let loader =this.loadingCon.create({
      content:"Loading Please Wait..."
    });

    loader.present();

    this.ahadeesprov.getRemoteData().subscribe(data=>{

      this.AhadeesDataone = data;

      loader.dismiss();

      console.log(data);

    });




  }

}
