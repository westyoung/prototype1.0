import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QRcodePage } from './qrcode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';


@NgModule({
  declarations: [
   QRcodePage,
  ],
  imports: [
    IonicPageModule.forChild(QRcodePage),
  ],
})
export class QRcodePageModule {}
