import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Router } from '@angular/router';
import {MatriculaOnlineService} from 'src/app/services/periodo-academico/matricula-online.service';
import { DataServiceService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-reporte-matricula',
  templateUrl: './reporte-matricula.component.html'
})
export class ReporteMatriculaComponent implements OnInit {
  public load: boolean;
  public matricula: any[];
  public date: number;
  @ViewChild('content', {static: false}) content : ElementRef;
  constructor(
    private serviceMatricula: MatriculaOnlineService,
    private serviceData: DataServiceService, ) {
    this.load = true;
    this.date = Date.now();
  }

  ngOnInit() {
    this. getAperturabyID();
  }

  public getAperturabyID() {
    this.serviceMatricula.getMatriculaById(this.serviceData.user.id).subscribe(data => {
      this.matricula = data;
      this.load = false;
    }, error => {
      console.log(error);
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
