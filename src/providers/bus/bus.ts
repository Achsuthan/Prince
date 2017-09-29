import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BusProvider {

  public location:any;

  constructor(public http: Http) {

  }

  public setlocation(set_location)
  {
    this.location=set_location;
  }

  public getlocation()
  {
    return this.location;
  }

}
