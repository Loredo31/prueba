import { Component, OnInit, HostBinding } from '@angular/core';
import { Gasto } from '../../models/Gasto';
import { GastosService } from '../../services/gastos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gasto-form',
  templateUrl: './gasto-form.component.html',
  styleUrls: ['./gasto-form.component.css']
})
export class GastoFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  gasto: Gasto = {
    Descripcion: '',
    Categoria: '',
    Monto: 0,
    FechaTransaccion: '',
    MetodoPago: ''
  };

  constructor(private gastosService: GastosService, private router: Router) {}

  ngOnInit() {}

  saveNewGasto() {
    this.gastosService.saveGastos(this.gasto).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/gastos/list']);
      },
      err => console.log(err)
    );
  }
}
