import { Component, OnInit } from '@angular/core';
import { Gasto } from '../../models/Gasto';
import { GastosService } from '../../services/gastos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gasto-form',
  templateUrl: './gasto-form.component.html',
  styleUrls: ['./gasto-form.component.css']
})
export class GastoFormComponent implements OnInit {

  gasto: Gasto = {
    Descripcion: '',
    Categoria: '',
    Monto: '',
    FechaTransaccion: '',
    MetodoPago: ''
  };

  isEditMode = false;
  gastoId: string | null = '';
  errorMessages: { [key: string]: string } = {};

  constructor(private gastosService: GastosService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.gastoId = this.route.snapshot.paramMap.get('id');
    if (this.gastoId) {
      this.isEditMode = true;
      this.gastosService.getGasto(this.gastoId).subscribe(
        (gasto: Gasto) => {
          this.gasto = gasto;
        },
        err => console.log(err)
      );
    }
  }

  validateForm(): boolean {
    this.errorMessages = {}; // Reset error messages

    if (!this.gasto.Descripcion) {
      this.errorMessages['Descripcion'] = 'Agregue una descripción*';
    }
    if (!this.gasto.Categoria) {
      this.errorMessages['Categoria'] = 'Seleccione una categoría*';
    }
    if (!this.gasto.Monto || isNaN(+this.gasto.Monto) || +this.gasto.Monto <= 0) {
      this.errorMessages['Monto'] = 'Ingrese un monto válido*';
    }    
    if (!this.gasto.FechaTransaccion) {
      this.errorMessages['FechaTransaccion'] = 'Seleccione una fecha de transacción*';
    }
    if (!this.gasto.MetodoPago) {
      this.errorMessages['MetodoPago'] = 'Seleccione un método de pago*';
    }

    return Object.keys(this.errorMessages).length === 0;
  }

  saveGasto() {
    if (this.validateForm()) {
      if (this.isEditMode && this.gastoId) {
        this.gastosService.updateGasto(this.gastoId, this.gasto).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/gastos/list']);
          },
          err => console.log(err)
        );
      } else {
        this.gastosService.saveGastos(this.gasto).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/gastos/list']);
          },
          err => console.log(err)
        );
      }
    }
  }
}
