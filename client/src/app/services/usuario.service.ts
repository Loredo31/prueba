import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private API_URI = 'http://localhost:3000/api/usuario'; // backend

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<{ usuarios: Usuario[] }>(`${this.API_URI}/`).pipe(
      map(response => response.usuarios)
    );
  }

  createUser(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.API_URI}/`, usuario);
  }

  getUsuarioPorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.API_URI}/${id}`);
  }
  
}
