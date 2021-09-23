import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicamento } from '../models/medicamento';

const baseURL = "http://localhost:8090/rest/alumno";

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {
  constructor(private http:HttpClient) { }

  create(data: Medicamento): Observable<any> {
    return this.http.post(baseURL, data);
  }



}
