import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import {DeletePage} from "../delete/delete";

@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class UserViewPage {

  constructor(public navCtrl: NavController,public menu:MenuController)
  {
    this.menu.enable(true, 'PrinceMenu');
  }

  ViewUser()
  {
    this.navCtrl.push(DeletePage);
  }

}
