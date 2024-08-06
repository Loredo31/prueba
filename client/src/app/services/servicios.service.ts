import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../models/Servicio';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private API_URI = 'http://localhost:3000/api/servicio';

  constructor(private http: HttpClient) { }

  getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.API_URI);
  }

  getServicio(id: string): Observable<Servicio> {
    return this.http.get<Servicio>(`${this.API_URI}/${id}`);
  }

  saveServicios(servicio: Servicio): Observable<any> {
    return this.http.post<any>(this.API_URI, servicio);
  }

  deleteServicio(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API_URI}/${id}`);
  }

  updateServicio(id: string, servicio: Servicio): Observable<any> {
    return this.http.put<any>(`${this.API_URI}/${id}`, servicio);
  }
}
