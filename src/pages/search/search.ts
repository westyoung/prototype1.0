import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams} from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/firestore';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {

  searchQuery: string = '';
  items: string[];
  tt: string = "test";
  numb: number = 0;
  list_yg : string[];
  variable: string;
 
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.firestoretest();
    this.initializeItems();
  }

  initializeItems() {
    let firestore = firebase.firestore();
    const itemRef = firestore.collection("items");
    //var length;
   // var Numbers:Array<number>=[1,2,3,4,5];
    var product : Array <string>=[];
    itemRef.where("quantity", ">", "0")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
           //this.list_yg.push(doc.data().model);
           //this.items.push(doc.data().model);
          // console.log(doc.data().model)
           product.push(doc.data().model);
           //console.log(product)
        })
    });

    this.items = product;
  }

  choose(str: any){
    
    this.navCtrl.push('DeletePage', {
     variable: str,
  });
  
  }
  
  getItems(ev: any) {

    let val = ev.target.value;
    //console.log(this.items, temp);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => { 
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}