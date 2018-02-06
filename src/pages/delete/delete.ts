import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
    templateUrl: 'delete.html'
})

export class DeletePage{
    variable: string;
    model: string;
    location: string;
    quantity: string;


    constructor(public navParams: NavParams, public navCtrl: NavController){
        this.variable = this.navParams.get("variable");
       
        console.log(this.variable) 
    }

    goTo(model: string) {
        let firestore = firebase.firestore();
        const itemRef = firestore.collection("items").doc(model)


        itemRef.get().then(function(doc) {
            if (doc.exists) {
                this.model = doc.data().model
                this.quantity = doc.data().quantity
                this.location = doc.data().location
                
            } else {
                console.log("No such document!");
            }
        })
      
      }
  
    click(){
        this.navCtrl.push('SuccessPage', {
            variable: this.variable,

        
        });
    }
}