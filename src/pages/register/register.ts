import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { AngularFireAuth } from 'angularfire2/auth'
import { User } from '../../models/user';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage{

    user = {} as User
    labelColor : string = "primary"

    constructor( private afAuth: AngularFireAuth,
        public navCtrl: NavController, public navParams: NavParams){

    }

    register(user:User){
        this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }
    doBlur(){
        this.labelColor = "danger";
    }
    doFocus(){
        this.labelColor = "secondary";
    }
}