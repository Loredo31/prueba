import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrl: './servicio-list.component.css'
})
export class ServicioListComponent {
  servicios: any = [];

  constructor(private serviciosService: ServiciosService) {}

  ngOnInit() {
    this.serviciosService.getServicios().subscribe(
      resp => {
        this.servicios = resp;
      },
      err => console.log(err)
    );
  }
}
