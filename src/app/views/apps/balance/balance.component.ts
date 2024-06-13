import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  balance: any = [];

  constructor() { }

  ngOnInit() {
    const blce: any = sessionStorage.getItem('balance');
    this.balance = JSON.parse(blce);
    console.log(this.balance);
    
  }

}
