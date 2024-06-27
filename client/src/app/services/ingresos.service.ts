import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingreso } from '../models/Ingreso'; 

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  private API_URI = 'http://localhost:3001/ingresos'

  constructor(private http: HttpClient) { }

  getIngresos(): Observable<Ingreso[]> {
    return this.http.get<Ingreso[]>(this.API_URI);
  }

  getIngreso(id:string){
    return this.http.get('${this.API_URL}/${id}');
  }

  saveIngresos(ingreso: Ingreso): Observable<any> {
    return this.http.post<any>(this.API_URI, ingreso);
  }
}
