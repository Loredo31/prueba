import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from '../models/Gasto';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private API_URI = 'http://localhost:3000/api/gasto'; // Asegúrate de que la URL esté correcta.

  constructor(private http: HttpClient) { }

  getGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.API_URI);
  }

  getGasto(id: string): Observable<Gasto> {
    return this.http.get<Gasto>(`${this.API_URI}/${id}`);
  }

  saveGastos(gasto: Gasto): Observable<any> {
    return this.http.post<any>(this.API_URI, gasto);
  }

  deleteGasto(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API_URI}/${id}`);
  }

  updateGasto(id: string, gasto: Gasto): Observable<any> {
    return this.http.put<any>(`${this.API_URI}/${id}`, gasto);
  }
}
