import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentManualPage } from './payment-manual';

@NgModule({
  declarations: [
    PaymentManualPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentManualPage),
  ],
})
export class PaymentManualPageModule {}
