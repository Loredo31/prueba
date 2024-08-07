import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RecuperarContrasenaComponent } from './components/auth/recuperar-contrasena/recuperar-contrasena.component';
import { RecuperarContrasena2Component } from './components/auth/recuperar-contrasena2/recuperar-contrasena2.component';
import { RegistrarseComponent } from './components/auth/registrarse/registrarse.component';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { GastoListComponent } from './components/gasto-list/gasto-list.component';
import { GastoFormComponent } from './components/gasto-form/gasto-form.component';
import { IngresoListComponent } from './components/ingreso-list/ingreso-list.component';
import { IngresoFormComponent } from './components/ingreso-form/ingreso-form.component';
import { ServicioFormComponent } from './components/servicio-form/servicio-form.component';
import { ServicioListComponent } from './components/servicio-list/servicio-list.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { AhorroComponent } from './components/ahorro/ahorro.component';
import { BilleteraComponent } from './components/billetera/billetera.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent }, 
  { path: 'recuperar-contrasena2', component: RecuperarContrasena2Component }, 
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'inicio-usuario/:userId', component: InicioUsuarioComponent },
  { path: 'gastos/list/:userId', component: GastoListComponent},
  { path: 'gastos/add/:userId', component: GastoFormComponent},
  { path: 'gastos/edit/:userId/:id', component: GastoFormComponent },
  { path: 'ingresos/list/:userId', component: IngresoListComponent},
  { path: 'ingresos/add/:userId', component: IngresoFormComponent},
  { path: 'ingresos/edit/:userId/:id', component: IngresoFormComponent },
  { path: 'servicios/add/:userId', component: ServicioFormComponent},
  { path: 'servicios/list/:userId', component: ServicioListComponent},
  { path: 'servicios/edit/:userId/:id', component: ServicioFormComponent },
  { path: 'usuario/:userId', component: UsuarioComponent},
  { path: "resumen/:userId", component: ResumenComponent},
  { path: "ahorro/:userId", component: AhorroComponent},
  { path: "billetera/:userId", component: BilleteraComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

