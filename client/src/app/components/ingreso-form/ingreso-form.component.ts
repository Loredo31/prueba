import { Component, OnInit, HostBinding } from '@angular/core';
import { Ingreso } from '../../models/Ingreso';
import { IngresosService } from '../../services/ingresos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-form',
  templateUrl: './ingreso-form.component.html',
  styleUrls: ['./ingreso-form.component.css']
})
export class IngresoFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  ingreso: Ingreso = {
    TipoIngreso: '',
    OrigenIngreso: '',
    Categoria: '',
    Monto: 0,
    FechaIngreso: ''
  };

  constructor(private ingresosService: IngresosService, private router: Router) {}

  ngOnInit() {}

  saveNewIngreso() {
    this.ingresosService.saveIngresos(this.ingreso).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/ingresos/list']);
      },
      err => console.log(err)
    );
  }
}
