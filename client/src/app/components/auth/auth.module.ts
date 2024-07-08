import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RecuperarContrasena2Component } from './recuperar-contrasena2/recuperar-contrasena2.component';



@NgModule({
  declarations: [
    LoginComponent,
    RecuperarContrasenaComponent,
    RegistrarseComponent,
    RecuperarContrasena2Component
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
