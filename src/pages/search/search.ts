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
  location: string;
  quantity: string;
 
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.firestoretest();
    this.initializeItems();
  }

  initializeItems() {
    let firestore = firebase.firestore();
    const itemRef = firestore.collection("items");
  
    var product : Array <string>=[];
    itemRef.where("quantity", ">", "0")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
           product.push(doc.data().model);

        })
    });

    this.items = product;
  }


  goTo(){
    this.navCtrl.push('PagesearchPage', {

  });
  
  }

  choose(item: string){
   
    let firestore = firebase.firestore();
    const itemRef = firestore.collection("items").doc(item)

    itemRef.get().then(function(doc) {
        if (doc.exists) {

         console.log(doc.data().quantity);
         console.log(doc.data().location);

        } else {
            console.log("No such document!");
        }
    })
  

    this.navCtrl.push('DeletePage', {
      item: item,
      location: this.location,
      quantity: this.quantity,
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