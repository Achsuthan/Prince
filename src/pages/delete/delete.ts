import { Component } from '@angular/core';
import {NavController, MenuController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html'
})
export class DeletePage {

  items;

  constructor(public navCtrl: NavController,public menu:MenuController, public alert:AlertController)
  {
    this.menu.enable(true, 'PrinceMenu');
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      '0774455878',
      '0771234567',
      '0774455878'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  Delete(item)
  {
    let prompt = this.alert.create({
      title: 'Delete',
      message: "Do you wnat to Delete  "+item+"  Booking ",
      buttons: [
        {
          text: 'No',
          handler: data => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: data => {
            console.log('Yes clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
