import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../services/gastos.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-gasto-list',
  templateUrl: './gasto-list.component.html',
  styleUrls: ['./gasto-list.component.css']
})
export class GastoListComponent implements OnInit {
  gastos: any = [];
  notificationMessage: string | null = null;

  constructor(
    private gastosService: GastosService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.loadGastos();
    this.notificationService.notification$.subscribe(message => {
      this.notificationMessage = message;
    });
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
