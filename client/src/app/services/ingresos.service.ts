import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingreso } from '../models/Ingreso';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  private API_URI = 'http://localhost:3000/api/ingreso';

  constructor(private http: HttpClient) { }

  getIngresos(): Observable<Ingreso[]> {
    return this.http.get<Ingreso[]>(this.API_URI);
  }

  getIngreso(id: string): Observable<Ingreso> {
    return this.http.get<Ingreso>(`${this.API_URI}/${id}`);
  }

  saveIngresos(ingreso: Ingreso): Observable<any> {
    return this.http.post<any>(this.API_URI, ingreso);
  }

  deleteIngreso(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API_URI}/${id}`);
  }

  updateIngreso(id: string, ingreso: Ingreso): Observable<any> {
    return this.http.put<any>(`${this.API_URI}/${id}`, ingreso);
  }
}
