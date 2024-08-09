import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../services/gastos.service';
import { IngresosService } from '../../services/ingresos.service';
import { ServiciosService } from '../../services/servicios.service';
import { Gasto } from '../../models/Gasto';
import { Ingreso } from '../../models/Ingreso';
import { Servicio } from '../../models/Servicio';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
  idUsuario: string | null = null;

  constructor(
    private gastoService: GastosService,
    private ingresoService: IngresosService,
    private servicioService: ServiciosService
  ) {}

  ngOnInit(): void {
    this.idUsuario = localStorage.getItem('IdUsuario');
    if (this.idUsuario) {
      this.getAllData();
    } else {
      console.error('Usuario no autenticado');
    }
  }

  createPdf() {
    const tableBody = [
      [{ text: 'Tipo', style: 'tableHeader' }, { text: 'Información', style: 'tableHeader' }, { text: 'Monto', style: 'tableHeader' }, { text: 'Fecha', style: 'tableHeader' }]
    ];

    this.resumen.forEach(item => {
      tableBody.push([
        item.type,
        item.Descripcion || item.TipoIngreso || item.Cliente,
        `$${item.Monto}`,
        new Date(item.FechaTransaccion || item.FechaIngreso || item.FechaServicio).toLocaleDateString()
      ]);
    });

    const pdfDefinition: any = {
      pageMargins: [40, 60, 40, 60], // Márgenes de la página
      pageSize: 'A4',
      background: function(currentPage, pageSize) {
        return {
          canvas: [
            {
              type: 'rect',
              x: 10,
              y: 10,
              w: pageSize.width - 20,
              h: pageSize.height - 20,
              r: 1,
              lineWidth: 1,
              lineColor: '#000000'
            }
          ]
        };
      },
      content: [
        { text: 'Resumen Gastos', style: 'header' },
        {
          style: 'tableExample',
          table: {
            body: tableBody,
            widths: ['25%', '25%', '25%', '25%'], // Anchos iguales para ocupar toda la hoja
          },
          layout: {
            fillColor: function (rowIndex) {
              return (rowIndex === 0) ? '#CCCCCC' : null; // Color de los encabezados
            }
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
          alignment: 'center'
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        },
      }
    };

    pdfMake.createPdf(pdfDefinition).download('ResumenGastos.pdf');
  }

  getAllData() {
    if (this.idUsuario) {
      this.gastoService.getGastos(this.idUsuario).subscribe((data: any) => {
        console.log('Gastos data:', data); // Añadir console.log aquí
        if (data && Array.isArray(data.gastos)) {
          this.gastos = data.gastos;
          this.addToResumen(this.gastos, 'Gasto');
        } else {
          console.error('Data received is not an array or missing property:', data);
        }
      });
    
      this.ingresoService.getIngresos(this.idUsuario).subscribe((data: any) => {
        console.log('Ingresos data:', data); // Añadir console.log aquí
        if (data && Array.isArray(data.ingresos)) {
          this.ingresos = data.ingresos;
          this.addToResumen(this.ingresos, 'Ingreso');
        } else {
          console.error('Data received is not an array or missing property:', data);
        }
      });
  
      this.servicioService.getServicios(this.idUsuario).subscribe((data: any) => {
        console.log('Servicios data:', data); // Añadir console.log aquí
        if (data && Array.isArray(data.servicios)) {
          this.servicios = data.servicios;
          this.addToResumen(this.servicios, 'Servicio');
        } else {
          console.error('Data received is not an array or missing property:', data);
        }
      });
    }
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
