import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../services/gastos.service';

@Component({
  selector: 'app-gasto-list',
  templateUrl: './gasto-list.component.html',
  styleUrls: ['./gasto-list.component.css']
})
export class GastoListComponent implements OnInit {
  gastos: any = [];

  constructor(private gastosService: GastosService) {}

  ngOnInit() {
    this.gastosService.getGastos().subscribe(
      (resp: any) => {
        this.gastos = resp.gastos;
      },
      err => console.log(err)
    );
  }
}
