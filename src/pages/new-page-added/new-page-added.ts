import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Transaction } from '../../database';

/**
 * Generated class for the NewPageAddedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-page-added',
  templateUrl: 'new-page-added.html',
})
export class NewPageAddedPage {
  model : Transaction= new Transaction(null,"");;

  //, public geolocator :GeolocationService
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NewPageAddedPage');
  
  }

  save()
  {
    this.model.save().then
    (result=>
      {
        this.model= new Transaction(null,"")
        this.navCtrl.pop();
      }
    );
  }

}
