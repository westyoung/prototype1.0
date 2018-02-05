<<<<<<< HEAD
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
=======
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    templateUrl: 'delete.html'
})

export class DeletePage{
    constructor(){
        
    }
>>>>>>> c3947aa90de71926baba58584a44fcae10d4582e
}