import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SendSmsComponent } from "./send-sms.component";

const route: Routes = [
    {path: '', component: SendSmsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class SendSmsRoutingModule {
}
