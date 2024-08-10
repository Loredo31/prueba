import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../../services/presupuestos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-usuario',
  templateUrl: './inicio-usuario.component.html',
  styleUrls: ['./inicio-usuario.component.css']
})
export class InicioUsuarioComponent implements OnInit {
  IdUsuario: string | null = null;
  presupuesto: any = {};

  constructor(
    private presupuestosService: PresupuestosService,
    private router: Router
  ) {}

  ngOnInit() {
    // Verifica si el código se está ejecutando en un entorno de navegador
    if (typeof window !== 'undefined') {
      this.IdUsuario = localStorage.getItem('IdUsuario');
      if (this.IdUsuario) {
        this.loadPresupuesto();
      } else {
        console.error('Usuario no autenticado');
        this.router.navigate(['/login']);
      }
    } else {
      console.error('No se puede acceder a localStorage en este entorno');
      this.router.navigate(['/login']);
    }
  }

  loadPresupuesto() {
    if (this.IdUsuario) {
      this.presupuestosService.getPresupuestos(this.IdUsuario).subscribe(
        (resp: any) => {
          console.log('Respuesta del presupuesto:', resp);
          this.presupuesto = resp;
        },
        err => console.error('Error al cargar el presupuesto:', err)
      );
    }
  }
}
