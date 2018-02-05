import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-removestock',
  templateUrl: 'removestock.html',
})
export class RemovestockPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.variable = this.navParams.get("variable");
    console.log(this.variable)
  }


  items: string[];
  name: string;
  labelColor: string = "primary";
  variable: string;




  remove()
  {
    let firestore = firebase.firestore();
    const itemRef = firestore.collection("items")

    itemRef.doc(this.variable).delete().then(function() {
      console.log("Document successfully deleted!");
      this.navCtrl.push('SearchPage')
      
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }


  doBlur(){
    this.labelColor = "danger";
    
  }
  doFocus(){
    this.labelColor = "secondary";
  }
}

