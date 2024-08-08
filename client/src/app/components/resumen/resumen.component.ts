import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../services/gastos.service';
import { IngresosService } from '../../services/ingresos.service';
import { ServiciosService } from '../../services/servicios.service';
import { Gasto } from '../../models/Gasto';
import { Ingreso } from '../../models/Ingreso';
import { Servicio } from '../../models/Servicio';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  gastos: Gasto[] = [];
  ingresos: Ingreso[] = [];
  servicios: Servicio[] = [];
  resumen: any[] = [];

  constructor(
    private gastoService: GastosService,
    private ingresoService: IngresosService,
    private servicioService: ServiciosService
  ) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.gastoService.getGastos().subscribe((data: any) => {
      if (data && Array.isArray(data.gastos)) {
        this.gastos = data.gastos;
        this.addToResumen(this.gastos, 'Gasto');
      } else {
        console.error('Data received is not an array:', data.gastos);
      }
    });

    this.ingresoService.getIngresos().subscribe((data: any) => {
      if (data && Array.isArray(data.ingresos)) {
        this.ingresos = data.ingresos;
        this.addToResumen(this.ingresos, 'Ingreso');
      } else {
        console.error('Data received is not an array:', data.ingresos);
      }
    });

    this.servicioService.getServicios().subscribe((data: any) => {
      if (data && Array.isArray(data.servicios)) {
        this.servicios = data.servicios;
        this.addToResumen(this.servicios, 'Servicio');
      } else {
        console.error('Data received is not an array:', data.servicios);
      }
    });
  }

  addToResumen(data: any[], type: string) {
    if (Array.isArray(data)) {
      data.forEach(item => {
        this.resumen.push({
          type: type,
          ...item
        });
      });
    }
  }
}
