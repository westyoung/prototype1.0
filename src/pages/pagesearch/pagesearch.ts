import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PagesearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagesearch',
  templateUrl: 'pagesearch.html',
})
export class PagesearchPage {
    items: string[];    
    location: string;
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
 
    }
      

    goTo(table: any) {
      let firestore = firebase.firestore();
      const itemRef = firestore.collection("items");
    
      var product : Array <string>=[];
      itemRef.where("location", "==", table)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
             product.push(doc.data().model);
        
          })
      });
  
      this.items = product;
    }

  
  }


