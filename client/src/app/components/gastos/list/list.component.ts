import { Component, HostBinding, OnInit } from '@angular/core';
import { GastosService } from '../../../services/gastos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  gastos: any = [];

  constructor(private gastosService: GastosService) {}

  ngOnInit(): void {
    this.gastosService.getGastos().subscribe(
      (resp) => {
        console.log(resp); // Añade esto para depurar
        this.gastos = resp;
      },
      (err) => console.error(err)
    );
  }
  
  }