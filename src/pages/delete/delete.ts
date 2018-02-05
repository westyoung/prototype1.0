import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';

@IonicPage()
@Component({
    templateUrl: 'delete.html'
})

export class DeletePage{
    variable: string;

    constructor(public navParams: NavParams, public navCtrl: NavController){
        this.variable = this.navParams.get("variable");
       
        console.log(this.variable) 
    }

    click(){
        this.navCtrl.push('SuccessPage', {
            variable: this.variable,

        
        });
    }
}