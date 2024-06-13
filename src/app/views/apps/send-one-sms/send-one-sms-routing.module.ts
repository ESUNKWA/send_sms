import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SendOneSmsComponent } from "./send-one-sms.component";

const routes: Routes = [
    {path: '', component: SendOneSmsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SendOneSmsRoutingModule {
}
