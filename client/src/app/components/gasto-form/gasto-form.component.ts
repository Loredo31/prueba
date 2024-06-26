import { Component, OnInit, HostBinding } from '@angular/core';
import { Gasto } from '../../models/Gasto';
import { GastosService } from '../../services/gastos.service';

@Component({
  selector: 'app-gasto-form',
  templateUrl: './gasto-form.component.html',
  styleUrl: './gasto-form.component.css'
})
export class GastoFormComponent {
  @HostBinding('class') classes = 'row';

  gasto: Gasto = {
    id: 0,
    descripcion: '',
    categoria: '',
    monto: 0,
    fechaTransaccion: new Date(),
    metodoPago: ''
  };

  constructor(private gastosService : GastosService){}

  ngOnInit() {}

  saveNewGasto() {
    this.gastosService.saveGastos(this.gasto).subscribe(
      resp => {console.log(resp)},
      err => console.log(err)
    )
  }

  generarID(): string {
    return Date.now().toString();
  }
}
