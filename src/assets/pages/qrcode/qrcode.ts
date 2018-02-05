import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@IonicPage()
@Component({
    templateUrl: 'qrcode.html'
})

export class QRcodePage{
    qrData=null;
    createdCode=null;
    scannedCode=null;
    constructor(private barcodeScanner : BarcodeScanner){
        
    }

   createCode(){
        this.createdCode=this.qrData;
   }
   scanCode(){
        this.barcodeScanner.scan().then(barcodeData=>{
            this.scannedCode = barcodeData.text;
        })
   }
}