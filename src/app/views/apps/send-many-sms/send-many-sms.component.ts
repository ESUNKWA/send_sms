import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-send-many-sms',
  templateUrl: './send-many-sms.component.html',
  styleUrls: ['./send-many-sms.component.css']
})
export class SendManySmsComponent implements OnInit {

  excelData: any[] = [];

  constructor() { }

  ngOnInit() {
    const dataTable = new DataTable("#dataTableExample");
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = (e: any) => {
        const binaryData = e.target.result;
        const workbook = XLSX.read(binaryData, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        this.excelData = XLSX.utils.sheet_to_json(sheet);
        console.log(this.excelData);
      };
    }
  }

}
