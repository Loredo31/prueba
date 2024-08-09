import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../../services/presupuestos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-usuario',
  templateUrl: './inicio-usuario.component.html',
  styleUrls: ['./inicio-usuario.component.css']
})
export class InicioUsuarioComponent implements OnInit {
  idUsuario: string | null = null;
  presupuesto: any = {};

  constructor(
    private presupuestosService: PresupuestosService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.idUsuario = localStorage.getItem('IdUsuario');
    if (this.idUsuario) {
      this.loadPresupuesto();
    } else {
      console.error('Usuario no autenticado');
      this.router.navigate(['/login']);
    }
  }

  loadPresupuesto() {
    if (this.idUsuario) {
      this.presupuestosService.getPresupuestos(this.idUsuario).subscribe(
        (resp: any) => {
          console.log('Respuesta del presupuesto:', resp);
          this.presupuesto = resp;
        },
        err => console.log(err)
      );
    }
  }
  
}
