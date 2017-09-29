import { Component } from '@angular/core';
import {NavController, MenuController, App} from 'ionic-angular';
import {HomePage} from "../home/home";

@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html'
})
export class ConfirmPage {
  public bus_name:any;

  constructor(public navCtrl: NavController,public menu:MenuController,public app:App)
  {
    this.bus_name =" Prince A ";
    this.menu.enable(true, 'PrinceMenu');
  }

  Book()
  {

  }
  Cancel()
  {
    this.app.getRootNav().setRoot(HomePage)
  }

}
