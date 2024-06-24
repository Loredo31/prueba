import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RecuperarContrasenaComponent } from './components/auth/recuperar-contrasena/recuperar-contrasena.component';
import { RegistrarseComponent } from './components/auth/registrarse/registrarse.component';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { GastoListComponent } from './components/gasto-list/gasto-list.component';
import { GastoFormComponent } from './components/gasto-form/gasto-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent }, 
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'inicio-usuario', component: InicioUsuarioComponent },
  { path: 'gastos/list', component: GastoListComponent},
  { path: 'gastos/add', component: GastoFormComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

