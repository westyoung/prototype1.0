import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
    templateUrl: 'delete.html'
})

export class DeletePage{
    model: string;
    location: string;
    quantity: string;


    constructor(public navParams: NavParams, public navCtrl: NavController){
        this.model = this.navParams.get("item");
        this.location = this.navParams.get("location");
        this.quantity = this.navParams.get("quantity");
    }

    contents() {
        let firestore = firebase.firestore();
        const itemRef = firestore.collection("items").doc(this.model)

        itemRef.get().then(function(doc) {
            if (doc.exists) {
                this.quantity = doc.data().quantity;
                this.location = doc.data().location;

                console.log(this.model)
                console.log(this.quantity),
                console.log(this.location)

            } else {
                console.log("No such document!");
            }
        })
      
      }
  
    click(){
        this.navCtrl.push('SuccessPage', {
        
        });
    }
}