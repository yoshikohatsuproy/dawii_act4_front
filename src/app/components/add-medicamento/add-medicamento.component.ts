import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento';
import { MedicamentoService } from '../../services/medicamento.service';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit {

  constructor(private MedicamentoService: MedicamentoService) { }
  medicamento : Medicamento = {};
  ngOnInit(): void {
  }
  saveMedicamento() : void {
    console.log("<<<saveAlumno>>>");
    console.log(this.medicamento);
    this.MedicamentoService.create(this.medicamento).subscribe(
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
