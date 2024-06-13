import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SendManySmsComponent } from "./send-many-sms.component";

const routes: Routes = [
    {path: '', component: SendManySmsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SendManySmsRoutingModule {
}
