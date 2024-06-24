import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../services/gastos.service';

@Component({
  selector: 'app-gasto-list',
  templateUrl: './gasto-list.component.html',
  styleUrl: './gasto-list.component.css'
})
export class GastoListComponent {
  gastos: any = [];

  constructor(private gastosService: GastosService) {}

  ngOnInit() {
    this.gastosService.getGastos().subscribe(
      resp => {
        this.gastos = resp;
      },
      err => console.log(err)
    );
  }
}
