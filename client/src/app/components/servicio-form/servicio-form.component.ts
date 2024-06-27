import { Component, OnInit, HostBinding } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { Servicio } from '../../models/Servicio';

@Component({
  selector: 'app-servicio-form',
  templateUrl: './servicio-form.component.html',
  styleUrl: './servicio-form.component.css'
})
export class ServicioFormComponent {
  @HostBinding('class') classes = 'row';

  servicio: Servicio = {
    id: 0,
    descripcion: '',
    cliente: '',
    estado: '',
    monto: 0,
    fechaServicio: new Date()
  };

  constructor(private serviciosService : ServiciosService){}

  ngOnInit() {}

  saveNewServicio() {
    this.serviciosService.saveServicios(this.servicio).subscribe(
      resp => {console.log(resp)},
      err => console.log(err)
    )
  }
}
