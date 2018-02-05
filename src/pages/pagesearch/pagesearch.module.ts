import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesearchPage } from './pagesearch';

@NgModule({
  declarations: [
    PagesearchPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesearchPage),
  ],
})
export class PagesearchPageModule {}
