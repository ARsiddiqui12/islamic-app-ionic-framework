import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Holyqurandata } from '../../pages/Holyquran';
/*
  Generated class for the HolyQuranProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HolyQuranProvider {

  private _url = "assets/HolyQuran.json";

  constructor(public http: HttpClient) {
    console.log('Hello HolyQuranProvider Provider');
  }


  getRemoteData(): Observable<Holyqurandata[]>{

   return this.http.get<Holyqurandata[]>(this._url);
   
  }

}
