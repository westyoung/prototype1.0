import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
//import { HomePage} from '../home/home';
//import { RegisterPage} from '../register/register'

@NgModule({
  declarations: [
    LoginPage, 
    //RegisterPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
   // IonicPageModule.forChild(RegisterPage)
  ],
  entryComponents : [
    LoginPage, 
   // RegisterPage

  ]
})
export class LoginPageModule {}
