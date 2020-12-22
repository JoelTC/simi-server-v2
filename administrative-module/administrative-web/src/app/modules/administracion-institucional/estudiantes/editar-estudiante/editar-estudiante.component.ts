import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Path } from 'src/app/infrastructure/constans/Path';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstudianteUPService } from 'src/app/services/administracion/AdmInstitucional/estudianteUP.service';
import { EstudianteUP } from 'src/app/domain/EstudianteUP';
import { TipoEstudiante } from 'src/app/domain/TipoEstudiante';
import { TipoEstudianteService } from 'src/app/services/administracion/AdmInstitucional/tipoEstudiante.service';



@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {
  public id: number;
  public load: boolean;
  public loading: string;
  public estudiante: EstudianteUP;
  public selectedTypeIdGenero: number;
  public selectedTypeIRol: number;
  public selectedTypeIdTipoEstudiante: number;

  public tamNomIdioma: 0;
  public tamDescIdioma: 0;
  public tipos: TipoEstudiante[];

  public tamNom: 0;
  public tamApellidoPat: 0;
  public tamApellidoMat: 0;
  public tamFechaNacimiento: 0;
  public tamNacionalidad: 0;
  public tamlugarNacDep: 0;
  public tamlugarNacProv: 0;
  public tamlugarNacDist: 0;
  public tamAdreess: 0;
  public tamUniversity: 0;
  public tamContrasenia: 0;
  public tamEmail: 0;
  public enviado: boolean;

  public estudianteForm: FormGroup;

  constructor(private router: Router, private activedRouter: ActivatedRoute, private tipoService: TipoEstudianteService,
    private estudianteUPService: EstudianteUPService) {
    this.load = true;
    this.loading = Path.loading;
    this.estudiante = new EstudianteUP();

    this.selectedTypeIdTipoEstudiante = 0;
    this.selectedTypeIdGenero = 0;
    this.selectedTypeIRol = 1;
    this.estudianteForm = this.createForm();
    this.enviado = false;
  }

  get nombreEst() { if (this.estudianteForm.get('nombreEst').value) this.tamNom = this.estudianteForm.get('nombreEst').value.length; return this.estudianteForm.get('nombreEst'); }
  get apellidoPat() { if (this.estudianteForm.get('apellidoPat').value) this.tamApellidoPat = this.estudianteForm.get('apellidoPat').value.length; return this.estudianteForm.get('apellidoPat'); }
  get apellidoMat() { if (this.estudianteForm.get('apellidoMat').value) this.tamApellidoMat = this.estudianteForm.get('apellidoMat').value.length; return this.estudianteForm.get('apellidoMat'); }
  get dniEst() { return this.estudianteForm.get('dniEst'); }
  get formGenero() { console.log("formGenero", this.estudianteForm.get('formGenero')); return this.estudianteForm.get('formGenero'); }
  get edad() { return this.estudianteForm.get('edad'); }
  get fechaNacimiento() { if (this.estudianteForm.get('fechaNacimiento').value) this.tamFechaNacimiento = this.estudianteForm.get('fechaNacimiento').value.length; return this.estudianteForm.get('fechaNacimiento'); }
  get nacionalidad() { if (this.estudianteForm.get('nacionalidad').value) this.tamNacionalidad = this.estudianteForm.get('nacionalidad').value.length; return this.estudianteForm.get('nacionalidad'); }
  get lugarNacDep() { if (this.estudianteForm.get('lugarNacDep').value) this.tamlugarNacDep = this.estudianteForm.get('lugarNacDep').value.length; return this.estudianteForm.get('lugarNacDep'); }
  get lugarNacProv() { if (this.estudianteForm.get('lugarNacProv').value) this.tamlugarNacProv = this.estudianteForm.get('lugarNacProv').value.length; return this.estudianteForm.get('lugarNacProv'); }
  get lugarNacDist() { if (this.estudianteForm.get('lugarNacDist').value) this.tamlugarNacDist = this.estudianteForm.get('lugarNacDist').value.length; return this.estudianteForm.get('lugarNacDist'); }
  get address() { if (this.estudianteForm.get('address').value) this.tamAdreess = this.estudianteForm.get('address').value.length; return this.estudianteForm.get('address'); }
  get university() { if (this.estudianteForm.get('university').value) this.tamUniversity = this.estudianteForm.get('university').value.length; return this.estudianteForm.get('university'); }
  get phone() { return this.estudianteForm.get('phone'); }
  get email() { if (this.estudianteForm.get('email').value) this.tamEmail = this.estudianteForm.get('email').value.length; return this.estudianteForm.get('email'); }
  get contrasenia() { if (this.estudianteForm.get('contrasenia').value) this.tamContrasenia = this.estudianteForm.get('contrasenia').value.length; return this.estudianteForm.get('contrasenia'); }
  get formTipoEstudiante() { return this.estudianteForm.get('formTipoEstudiante'); }
  get formRoles() { return this.estudianteForm.get('formRoles'); }
  get formIdioma() { return this.estudianteForm.get('formIdioma'); }
  get formNivel() { return this.estudianteForm.get('formNivel'); }

  private FormatEmailPattern: any = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@unmsm.edu.pe*$/;
  private OnlyTextPattern: any = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
  createForm() {
    return new FormGroup({
      nombreEst: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(this.OnlyTextPattern)]),
      apellidoPat: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(this.OnlyTextPattern)]),
      apellidoMat: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(this.OnlyTextPattern)]),
      dniEst: new FormControl('', [Validators.required, Validators.min(10000000), Validators.max(99999999)]),
      formGenero: new FormControl('', [Validators.required, Validators.min(1), Validators.max(2)]),
      edad: new FormControl('', [Validators.min(8), Validators.max(100)]),
      fechaNacimiento: new FormControl('',),
      lugarNacDist: new FormControl('', [Validators.maxLength(128), Validators.minLength(3)]),
      lugarNacProv: new FormControl('', [Validators.maxLength(128), Validators.minLength(3)]),
      lugarNacDep: new FormControl('', [Validators.maxLength(128), Validators.minLength(3)]),
      nacionalidad: new FormControl('', [Validators.maxLength(60), Validators.minLength(3)]),
      address: new FormControl('', [Validators.maxLength(150), Validators.minLength(5)]),
      university: new FormControl('', [Validators.maxLength(128), Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required, Validators.min(100000000), Validators.max(999999999)]),
      formRoles: new FormControl('', [Validators.required, Validators.min(1)]),
      formTipoEstudiante: new FormControl('', [Validators.required, Validators.min(1)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(150), Validators.pattern(this.FormatEmailPattern)]),
      contrasenia: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]),
    });
  }

  ngOnInit() {
    this.getEstudiante();
    this.getTE();


  }
  getTE() {
    this.tipoService.getTipoEstudiantes().subscribe(data => {
      this.tipos = data;
      this.load = false;
    });
  }
  private getEstudiante() {
    this.activedRouter.params.subscribe(data => {
      console.log("data", data);
      if (data.id !== 0) {
        this.id = data.id;
        console.log("id ", this.id);
        console.log("data ", data);

        this.estudianteUPService.getEstudianteUPById(this.id).subscribe(data => {
          this.load = false;

          if (data !== null) {
            this.estudiante = data;
            this.selectedTypeIdTipoEstudiante = this.estudiante.idTipoEstudiante;
            console.log("this.estudianteUP,", this.selectedTypeIdTipoEstudiante);

          } else { this.navigateList(); }

        });
      }
      else {
        this.navigateList();
      }
    });
  }



  cancelar() {
    this.navigateList();
  }

  public guardar() {
    this.enviado = true;
    console.log("this.this.estudianteForm al guardar", this.estudianteForm);
    console.log("this.this.estudianteForm al guardar", this.estudianteForm.valid);
    console.log("estudauater", this.estudiante);
    if (this.estudianteForm.valid) {
      //entro
      this.load = true;
      this.estudiante.idTipoEstudiante = this.selectedTypeIdTipoEstudiante;
      console.log("this.idioma al guardar", this.estudiante);


      this.estudianteUPService.editarEstudianteUPById(this.estudiante, this.estudiante.codEstudiante).subscribe(data => {
        if (data != null) {
          console.log("data", data);
          Swal.fire(
            'Edición Exitosa!',
            'El estudiante ' + this.estudiante.nombre + ' ' + this.estudiante.apellidoPat +
            ' ' + this.estudiante.apellidoMat + ' se edito correctamente.',
            'success'
          );
          this.navigateList();
        } else {
          this.load = false;
          // this.empty = true;
          // this.successText = 'El idioma  ya existe';
        }
      }, error => {

        Swal.fire(
          'Error!',
          error.error.text,
          'info'
        );
        if (error) {
          this.load = false;
          // this.obtenerIdiomas();

        }
      });
    }
  }


  private navigateList() {
    this.router.navigate(['administracionInstitucional/estudiantes']).then();
  }



}
