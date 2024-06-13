import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataTable } from 'simple-datatables';
import { SmsapiService } from 'src/app/services/smsapi/smsapi.service';

@Component({
  selector: 'app-send-one-sms',
  templateUrl: './send-one-sms.component.html',
  styleUrls: ['./send-one-sms.component.css']
})
export class SendOneSmsComponent implements OnInit, OnDestroy {
  
  alert1closed: boolean = true;
  result: string;

  public susbcription: Subscription = new Subscription;

  public sendSmsData = this.fb.group({
    destinataire: [],
    message: []
  });
  

  constructor( private fb: FormBuilder, private smsapiService: SmsapiService ) { }

  ngOnInit() {
    const dataTable = new DataTable("#dataTableExample");
  }

  public sendSms(){
    this.susbcription.add(
      this.smsapiService.send_sms(this.sendSmsData.value).subscribe(
        (data: any) => {
          this.alert1closed = false;
          this.result       = data._message;
          this.sendSmsData.reset();
        },
        (error) => console.log(error)
       )
    );
  }


  ngOnDestroy(): void {
    this.susbcription.unsubscribe();
  }

}
