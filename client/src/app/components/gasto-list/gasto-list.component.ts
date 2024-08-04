import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../services/gastos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gasto-list',
  templateUrl: './gasto-list.component.html',
  styleUrls: ['./gasto-list.component.css']
})
export class GastoListComponent implements OnInit {
  gastos: any = [];

  constructor(private gastosService: GastosService, private router: Router) {}

  ngOnInit() {
    this.loadGastos();
  }

  loadGastos() {
    this.gastosService.getGastos().subscribe(
      (resp: any) => {
        this.gastos = resp.gastos;
      },
      err => console.log(err)
    );
  }

  deleteGasto(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este gasto?')) {
      this.gastosService.deleteGasto(id.toString()).subscribe(
        () => {
          this.gastos = this.gastos.filter((gasto: any) => gasto.IdGasto !== id);
        },
        err => console.log(err)
      );
    }
  }

  editGasto(id: number) {
    this.router.navigate(['/gastos/edit', id]);
  }
}
