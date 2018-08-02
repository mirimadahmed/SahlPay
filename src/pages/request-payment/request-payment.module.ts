import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestPaymentPage } from './request-payment';

@NgModule({
  declarations: [
    RequestPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestPaymentPage),
  ],
})
export class RequestPaymentPageModule {}
