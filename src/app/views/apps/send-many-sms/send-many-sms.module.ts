import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendManySmsComponent } from './send-many-sms.component';
import { SendManySmsRoutingModule } from './send-many-sms-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SendManySmsRoutingModule
  ],
  declarations: [SendManySmsComponent]
})
export class SendManySmsModule { }
