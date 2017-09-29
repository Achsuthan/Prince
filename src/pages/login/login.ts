import { Component } from '@angular/core';
import {NavController, MenuController, App} from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,public menu:MenuController,public app:App)
  {
    this.menu.enable(false, 'PrinceMenu');
  }

  login()
  {
    this.app.getRootNav().setRoot(HomePage);
  }

}
