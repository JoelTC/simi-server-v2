import { Component, OnInit, Input } from '@angular/core';
import {AlumnoService} from 'src/app/services/data-user/informacion-alumno.service';
import {Alumno} from 'src/app/models/Alumno';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-historial-datos-alumno',
  templateUrl: './historial-datos-alumno.component.html'
})

export class HistorialDatosAlumnoComponent implements OnInit {
  public load: boolean;
  public alumno : Alumno;
  constructor(private serviceAlumno : AlumnoService, private serviceData: DataServiceService) {
   }

  ngOnInit(): void {
    this.getAlumnoById();
  }

  public getAlumnoById(){
    this.serviceAlumno.getAlumnoById(this.serviceData.user.id).subscribe(data => {
      this.alumno = data;
      console.log(this.alumno);
    }, error =>{
      console.log(error);
    });
  }
}
