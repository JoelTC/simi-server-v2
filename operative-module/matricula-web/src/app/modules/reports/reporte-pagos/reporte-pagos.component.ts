import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-reporte-pagos',
  templateUrl: './reporte-pagos.component.html'
})
export class ReportePagosComponent implements OnInit {

  public load: boolean;
  public vouchers: any[];
  public date: number;
  @ViewChild('content', {static: false}) content : ElementRef;
  constructor(private serviceData: DataServiceService) {
    this.date = Date.now();
   }

  ngOnInit() {
    this.getVouchers();
  }

  public getVouchers() {
    this.load = true;
    console.log('Obteniendo vouchers');
    this.serviceData.getPagosRealizados().subscribe(data => {
      this.load = false;
      this.vouchers = data;
    });
  }

  public downloadPDF(){
    let doc =new jsPDF('p', 'pt', [ 841.89, 595.28])
    let specialElementHandlers ={
      '#editor':function(element,renderer){
        return true;
      }
    };

    let content =this.content.nativeElement;
    doc.fromHTML(content.innerHTML,80,80,{
      'width':841,
      
      'elementHandlers':specialElementHandlers
    });
    doc.save('REPORT.pdf');
  }
}
