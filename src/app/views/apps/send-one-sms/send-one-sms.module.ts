import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendOneSmsComponent } from './send-one-sms.component';
import { SendOneSmsRoutingModule } from './send-one-sms-routing.module';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SendOneSmsRoutingModule,
    NgxMaskModule.forRoot({ validation: true}), // Ngx-mask
    ReactiveFormsModule,
    NgbAlertModule
  ],
  declarations: [SendOneSmsComponent]
})
export class SendOneSmsModule { }
