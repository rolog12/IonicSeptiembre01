import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Transaction } from '../../database';
import { NewPageAddedPage } from '../new-page-added/new-page-added'

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  title: string= "Transactions";
  /* New */
  transactions :any;
  newPageAddedPage = NewPageAddedPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //ionViewDidLoad()
  ionViewDidEnter()
  {
    // let transaction = new Transaction(20,'Mi Primera Transaccion',2015,35,4);
    // transaction.save();
    console.log('ionViewDidLoad TransactionsPage');    
    this.loadTransaction();
  }
  loadTransaction()
  {
    Transaction.all()
    .then((resultados)=>{this.transactions= resultados});
        //console.log(resultados)});
  }
  
}
