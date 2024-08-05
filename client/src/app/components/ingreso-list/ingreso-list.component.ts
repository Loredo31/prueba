import { Component, OnInit } from '@angular/core';
import { IngresosService } from '../../services/ingresos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-list',
  templateUrl: './ingreso-list.component.html',
  styleUrls: ['./ingreso-list.component.css']
})
export class IngresoListComponent implements OnInit {
  ingresos: any = [];

  constructor(private ingresosService: IngresosService, private router: Router) {}

  ngOnInit() {
    this.loadIngresos();
  }

  loadIngresos() {
    this.ingresosService.getIngresos().subscribe(
      (resp: any) => {
        this.ingresos = resp.ingresos;
      },
      err => console.log(err)
    );
  }

  deleteIngreso(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este ingreso?')) {
      this.ingresosService.deleteIngreso(id.toString()).subscribe(
        () => {
          this.ingresos = this.ingresos.filter((ingreso: any) => ingreso.IdIngreso !== id);
        },
        err => console.log(err)
      );
    }
  }

  editIngreso(id: number) {
    this.router.navigate(['/ingresos/edit', id]);
  }
}
