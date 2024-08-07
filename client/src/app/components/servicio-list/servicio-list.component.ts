import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css']
})
export class ServicioListComponent implements OnInit {
  servicios: any = [];

  constructor(private serviciosService: ServiciosService, private router: Router) {}

  ngOnInit() {
    this.loadServicios();
  }

  loadServicios() {
    this.serviciosService.getServicios().subscribe(
      (resp: any) => {
        this.servicios = resp.servicios;
      },
      err => console.log(err)
    );
  }

  deleteServicio(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este servicios?')) {
      this.serviciosService.deleteServicio(id.toString()).subscribe(() => {
          this.servicios = this.servicios.filter((servicio: any) => servicio.IdServicio !== id);
        },
        err => console.log(err)
      );
    }
  }

  editServicio(id: number) {
    this.router.navigate(['/servicios/edit', id]);
  }

}
