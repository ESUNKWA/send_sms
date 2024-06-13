import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error, log } from 'console';
import { SmsapiService } from 'src/app/services/smsapi/smsapi.service';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.scss']
})
export class SendSmsComponent implements OnInit {

  public balance: any = [];

  constructor( private router: Router, private smsapiService: SmsapiService ) { }

  ngOnInit(): void {
    this.getBalance();
  }

  public sendOneSms(): void{
    const link = ['/send-one-sms'];
    this.router.navigate(link);
  }

  public sendManySms(): void{
    const link = ['/send-many-sms'];
    this.router.navigate(link);
  }

  public afficheBalance(){
    const link = ['/balance']
    this.router.navigate(link);
  }

  public getBalance(){
    this.smsapiService.balance().subscribe(
      (data: any) => {
        this.balance = data;
        sessionStorage.setItem('balance', JSON.stringify(this.balance));
      },
      (error)=> console.log(error)
    )
  }

}
