import { Component } from '@angular/core'
import { NavParams } from 'ionic-angular'
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
    templateUrl : 'success.html'

})

export class SuccessPage{

    variable: string;

    constructor(public navParams: NavParams){
        this.variable = this.navParams.get("variable");
       
        console.log(this.variable)
    }
}