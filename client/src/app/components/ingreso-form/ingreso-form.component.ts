import { Component, OnInit, HostBinding } from '@angular/core';
import { IngresosService } from '../../services/ingresos.service';
import { Ingreso } from '../../models/Ingreso';

@Component({
  selector: 'app-ingreso-form',
  templateUrl: './ingreso-form.component.html',
  styleUrl: './ingreso-form.component.css'
})
export class IngresoFormComponent {
  @HostBinding('class') classes = 'row';

  ingreso: Ingreso = {
    id: 0,
    tipoIngreso: '',
    origenIngreso: '',
    categoria: '',
    monto: 0,
    fechaIngreso: new Date() 
  };

  constructor(private ingresosService : IngresosService){}

  ngOnInit() {}

  saveNewIngreso() {
    this.ingresosService.saveIngresos(this.ingreso).subscribe(
      resp => {console.log(resp)},
      err => console.log(err)
    )
  }

  generarID(): string {
    return Date.now().toString();
  }
}

