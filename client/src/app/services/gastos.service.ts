import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from '../models/Gasto';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private API_URI = 'http://localhost:3000/gastos'

  constructor(private http: HttpClient) { }

  getGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.API_URI);
  }

  getGasto(id:string){
    return this.http.get('${this.API_URL}/${id}');
  }

  saveGastos(gasto: Gasto): Observable<any> {
    return this.http.post<any>(this.API_URI,gasto);
  }
}
