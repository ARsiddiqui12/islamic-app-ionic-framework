import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { AhadeesData } from '../../pages/Ahadees';
/*
  Generated class for the AhadeesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AhadeesProvider {

  public Api = "assets/Ahadees.json";

  constructor(public http: HttpClient) {
    console.log('Hello AhadeesProvider Provider');
  }

  getRemoteData(): Observable<AhadeesData[]>{

    return this.http.get<AhadeesData[]>(this.Api);
    
   }

}
