import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './components/auth/login/login.component';
import { RegistrarseComponent } from './components/auth/registrarse/registrarse.component';
import { RecuperarContrasenaComponent } from './components/auth/recuperar-contrasena/recuperar-contrasena.component';
import { RecuperarContrasena2Component } from './components/auth/recuperar-contrasena2/recuperar-contrasena2.component';
import { HomeComponent } from './components/home/home.component';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { GastoFormComponent } from './components/gasto-form/gasto-form.component';
import { GastoListComponent } from './components/gasto-list/gasto-list.component';
import { IngresoFormComponent } from './components/ingreso-form/ingreso-form.component';
import { IngresoListComponent } from './components/ingreso-list/ingreso-list.component';
import { ServicioFormComponent } from './components/servicio-form/servicio-form.component';
import { ServicioListComponent } from './components/servicio-list/servicio-list.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ResumenComponent } from './components/resumen/resumen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrarseComponent,
    RecuperarContrasenaComponent,
    RecuperarContrasena2Component,
    InicioUsuarioComponent,
    GastoFormComponent,
    GastoListComponent,
    IngresoFormComponent,
    IngresoListComponent,
    ServicioFormComponent,
    ServicioListComponent,
    UsuarioComponent,
    ResumenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
