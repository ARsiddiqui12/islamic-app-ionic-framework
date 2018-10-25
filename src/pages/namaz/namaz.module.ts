import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NamazPage } from './namaz';

@NgModule({
  declarations: [
    NamazPage,
  ],
  imports: [
    IonicPageModule.forChild(NamazPage),
  ],
})
export class NamazPageModule {}
