import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../models/Servicio';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private API_URI = 'http://localhost:3002/servicios'

  constructor(private http: HttpClient) { }

  getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.API_URI);
  }

  getServicio(id:string){
    return this.http.get('${this.API_URL}/${id}');
  }

  saveServicios(servicio: Servicio): Observable<any> {
    return this.http.post<any>(this.API_URI, servicio);
  }
}