import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RecuperarContrasenaComponent } from './components/auth/recuperar-contrasena/recuperar-contrasena.component';
import { RegistrarseComponent } from './components/auth/registrarse/registrarse.component';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { GastoListComponent } from './components/gasto-list/gasto-list.component';
import { GastoFormComponent } from './components/gasto-form/gasto-form.component';
import { IngresoListComponent } from './components/ingreso-list/ingreso-list.component';
import { IngresoFormComponent } from './components/ingreso-form/ingreso-form.component';
import { ServicioFormComponent } from './components/servicio-form/servicio-form.component';
import { ServicioListComponent } from './components/servicio-list/servicio-list.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ResumenComponent } from './components/resumen/resumen.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent }, 
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'inicio-usuario', component: InicioUsuarioComponent },
  { path: 'gastos/list', component: GastoListComponent},
  { path: 'gastos/add', component: GastoFormComponent},
  { path: 'ingreso/list', component: IngresoListComponent},
  { path: 'ingreso/add', component: IngresoFormComponent},
  { path: 'servicio/add', component: ServicioFormComponent},
  { path: 'servicio/list', component: ServicioListComponent},
  { path: 'agenda', component: AgendaComponent},
  { path: 'usuario', component: UsuarioComponent},
  { path: "resumen", component: ResumenComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

