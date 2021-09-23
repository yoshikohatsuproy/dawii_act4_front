import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno.model';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {

  constructor(private AlumnoService: AlumnoService) { }
  alumno : Alumno = {};

  ngOnInit(): void {
  }

  saveAlumno() : void {
    console.log("<<<saveAlumno>>>");
    console.log(this.alumno);
    this.AlumnoService.create(this.alumno).subscribe(
      response =>{
        console.log(response.mensaje);
        alert(response.mensaje);
      },
      error => {
        alert(error);
      }
    );
  }
}
