import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';

@Component({
  selector: 'page-print',
  templateUrl: 'print.html'
})
export class UserPrintPage {

  constructor(public navCtrl: NavController,public menu:MenuController)
  {
    this.menu.enable(false, 'PrinceMenu');
  }

}
