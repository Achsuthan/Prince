import { Component } from '@angular/core';
import {NavController, MenuController, App} from 'ionic-angular';
import {BookingPage} from "../booking/booking";
import {BusProvider} from "../../providers/bus/bus";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menu:MenuController,public bus: BusProvider)
  {
    this.menu.enable(true, 'PrinceMenu');
  }
  
  booking()
  {
    this.navCtrl.push(BookingPage);
  }

  JaffnaToColombo()
  {
    this.bus.setlocation("JaffnaToColombo");
    this.navCtrl.push(BookingPage);
  }
  ColomboToJaffna()
  {
    this.bus.setlocation("ColomboToJaffna");
    this.navCtrl.push(BookingPage);
  }
}
