import { Component, OnInit, HostBinding } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from '../../models/Servicio';

@Component({
  selector: 'app-servicio-form',
  templateUrl: './servicio-form.component.html',
  styleUrls: ['./servicio-form.component.css']
})
export class ServicioFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  mostrarOtros: boolean = false;

  servicio: Servicio = {
    Producto: '',
    Cantidad: '',
    Cliente: '',
    Estado: '',
    Monto: '',
    FechaServicio: ''
  };

  isEditMode = false;
  servicioId: string | null = '';
  errorMessages: { [key: string]: string } = {};

  constructor(private serviciosService: ServiciosService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.servicioId = this.route.snapshot.paramMap.get('id');
    if (this.servicioId) {
      this.isEditMode = true;
      this.serviciosService.getServicio(this.servicioId).subscribe(
        (servicio: Servicio) => {
          this.servicio = servicio;
        },
        err => console.log(err)
      );
    }
  }

  validateForm(): boolean {
    this.errorMessages = {}; // Reset error messages

    if (!this.servicio.Producto) {
      this.errorMessages['Producto'] = 'Seleccione el producto*';
    }
    if (!this.servicio.Cantidad) {
      this.errorMessages['Cantidad'] = 'Escriba la cantidad de producto(s)*';
    }
    if (!this.servicio.Cliente) {
      this.errorMessages['Cliente'] = 'Escriba el nombre del cliente*';
    }
    if (!this.servicio.Estado) {
      this.errorMessages['Estado'] = 'Seleccione el estado actual*';
    }
    if (!this.servicio.Monto || isNaN(+this.servicio.Monto) || +this.servicio.Monto <= 0) {
      this.errorMessages['Monto'] = 'Ingreso el monto total*';
    }
    if (!this.servicio.FechaServicio) {
      this.errorMessages['FechaServicio'] = 'Seleccione una fecha*';
    }

    return Object.keys(this.errorMessages).length === 0;
  }

  saveServicio() {
    if (this.validateForm()) {
      if (this.isEditMode && this.servicioId) {
        this.serviciosService.updateServicio(this.servicioId, this.servicio).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/servicios/list']);
          },
          err => console.log(err)
        );
      } else {
        this.serviciosService.saveServicios(this.servicio).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/servicios/list']);
          },
          err => console.log(err)
        );
      }
    }
  }

}
