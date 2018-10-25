import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ActionSheetController } from 'ionic-angular';
import { HolyQuranProvider } from '../../providers/holy-quran/holy-quran';
import 'rxjs/add/operator/map';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
/**
 * Generated class for the HolyquranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-holyquran',
  templateUrl: 'holyquran.html',
})
export class HolyquranPage {

  public HQdata:any[];

  public ImgUrl = "assets/imgs/icon-7.jpg";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public HQProvider:HolyQuranProvider,
              public loadingcontroller:LoadingController,
              public actionsheet:ActionSheetController,
              private socialSharing:SocialSharing
            ) {}

  ionViewDidLoad() {
 
    let loader = this.loadingcontroller.create({
      content:"Loading Please Wait..."
    });

    loader.present();

    return this.HQProvider.getRemoteData().subscribe(data=>
      {
        this.HQdata=data;

        loader.dismiss();
      
      });

  }

      ShareContent(dataForShare)
      {
 
          let shareContent = this.actionsheet.create({

            title:"Share Now",
            buttons:[

              { 
                
                text:"Facebook", 
                icon:"logo-facebook",
                handler:()=>{
                  this.socialSharing.shareViaFacebook(dataForShare.title,dataForShare.thumbnail,dataForShare.videourl);
                }
              },
              { 
                
                text:"Twitter", 
                icon:"logo-twitter",
                handler:()=>{
                  this.socialSharing.shareViaTwitter(dataForShare.title,dataForShare.thumbnail,dataForShare.videourl);
                }
              },
              { 
                
                text:"Share", 
                icon:"share"
              },
              { 
                
                text:"Cancel", 
                icon:"close",
                role:"destructive"
              }

            ]

          });


          shareContent.present();
        

      }

}
