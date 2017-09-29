import { Component } from '@angular/core';
import {NavController, MenuController, AlertController} from 'ionic-angular';
import {BusPage} from "../bus/bus";

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})
export class BookingPage {

  public button_clicked=false;
  public bus_name:any;

  constructor(public navCtrl: NavController,public menu:MenuController,public alert:AlertController)
  {
    this.menu.enable(true, 'PrinceMenu');
  }

  bus()
  {
    this.bus_name="Prince A";
    let prompt = this.alert.create({
      title: 'Date',
      message: "Select a date for book "+this.bus_name+"  Bus ",
      inputs: [
        {
          name: 'Date',
          placeholder: 'Date',
          type: 'date'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            console.log('Ok clicked');
            this.navCtrl.push(BusPage);
          }
        }
      ]
    });
    prompt.present();
  }

}
