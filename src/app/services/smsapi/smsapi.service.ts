import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmsapiService {

  constructor( private http: HttpClient ) { }

  public balance(){
    const result = this.http.get(`/just/send/apisms/balance`).pipe();
    return result;
  }

  public send_sms(data: any){
    const result = this.http.post(`/just/send/apisms/send`, data).pipe();
    return result;
  }

}
