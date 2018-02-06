import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-pagesearch',
  templateUrl: 'pagesearch.html',
})
export class PagesearchPage {
    items: string[];    
    location: string;
    table: {test};
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      
    }
      

    goTo(table: string) {
      let firestore = firebase.firestore();
      const itemRef = firestore.collection("items");
    
      var product : Array <string>=[];
      itemRef.where("location", '==' , table)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
             product.push(doc.data().model);
        
          })
      });
  
      this.items = product;
      
    }

  
  }


