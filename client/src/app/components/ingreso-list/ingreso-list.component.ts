import { Component, OnInit } from '@angular/core';
import { IngresosService } from '../../services/ingresos.service';

@Component({
  selector: 'app-ingreso-list',
  templateUrl: './ingreso-list.component.html',
  styleUrl: './ingreso-list.component.css'
})
export class IngresoListComponent {
  ingresos: any = [];

  constructor(private ingresosService: IngresosService) {}

  ngOnInit() {
    this.ingresosService.getIngresos().subscribe(
      resp => {
        this.ingresos = resp;
      },
      err => console.log(err)
    );
  }
}
