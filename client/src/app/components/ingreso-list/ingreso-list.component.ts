import { Component, OnInit } from '@angular/core';
import { IngresosService } from '../../services/ingresos.service';

@Component({
  selector: 'app-ingreso-list',
  templateUrl: './ingreso-list.component.html',
  styleUrls: ['./ingreso-list.component.css']
})
export class IngresoListComponent implements OnInit {
  ingresos: any = [];

  constructor(private ingresosService: IngresosService) {}

  ngOnInit() {
    this.ingresosService.getIngresos().subscribe(
      (resp: any) => {
        this.ingresos = resp.ingresos;
      },
      err => console.log(err)
    );
  }
}
