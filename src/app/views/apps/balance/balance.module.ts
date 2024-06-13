import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceComponent } from './balance.component';
import { BalanceRoutingModule } from './balance-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BalanceRoutingModule
  ],
  declarations: [BalanceComponent]
})
export class BalanceModule { }
