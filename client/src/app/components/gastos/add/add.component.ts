import { Component, HostBinding, OnInit } from '@angular/core';
import { Gastos } from '../../../models/Gasto';
import { GastosService } from '../../../services/gastos.service';
import { error } from 'console';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @HostBinding('class') classes = 'row';

  gasto : Gastos ={
    id : 0,
    usuario : '',
    servicio: '',
    categoria: '',
    cantidad: 0,
    fecha: new Date()
  };

  constructor(private gastosService: GastosService){}

  ngOnInit(){}

  saveNewGasto(){
    this.gastosService.saveGastos(this.gasto).subscribe(
      resp => {console.log(resp)},
      err => console.log(error)
    )
  }
}
