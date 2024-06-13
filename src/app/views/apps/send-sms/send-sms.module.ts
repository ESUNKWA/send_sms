import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SendSmsComponent } from "./send-sms.component";
import { SendSmsRoutingModule } from "./send-sms-routing.module";

@NgModule({
    imports: [
        CommonModule,
        SendSmsRoutingModule
    ],
    declarations: [SendSmsComponent],
})
export class SendSmsModule {
}
