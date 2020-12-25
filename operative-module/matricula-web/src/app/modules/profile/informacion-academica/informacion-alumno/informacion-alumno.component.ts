import { Component, OnInit, Input } from '@angular/core';
import { PersonaUsuario } from 'src/app/models/PersonaUsuario';
import {AlumnoService} from 'src/app/services/data-user/informacion-alumno.service';
import {Alumno} from 'src/app/models/Alumno';
import { DataServiceService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-informacion-alumno',
  templateUrl: './informacion-alumno.component.html',
  styleUrls: ['./informacion-alumno.component.css']
})
export class InformacionAlumnoComponent implements OnInit {

  public show: boolean;
  @Input() public user: PersonaUsuario;

  public load: boolean;
  public alumno : Alumno;
  constructor(private serviceAlumno : AlumnoService, private serviceData: DataServiceService) { 
    //this.show = false;
  }

  ngOnInit(): void {
    this.getAlumnoById();
  }

  public mostrarInformacionAcademica() {
    this.show = !this.show;
  }

  public mostrarInformacionPersonal() {
    this.show = !this.show;
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
