import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class BusMapPage {

  constructor(public navCtrl: NavController,public menu:MenuController)
  {
    this.menu.enable(true, 'PrinceMenu');
  }

}
