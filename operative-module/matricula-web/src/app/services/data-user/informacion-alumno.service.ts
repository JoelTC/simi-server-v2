import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from 'src/app/models/Alumno';

@Injectable({
    providedIn: 'root'
  })
  export class AlumnoService {
  
    private url: string;
    constructor(private http: HttpClient) {
      this.url = 'simi/matricula/api/v1/alumno';
    }
    public getAlumnoById(idCurso: number) {
      return this.http.get<Alumno>(this.url + '/' + idCurso);
    }
  }
  