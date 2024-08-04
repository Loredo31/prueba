import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse-form',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  usuario: Usuario = {
    Nombre: '',
    ApPaterno: '',
    ApMaterno: '',
    NumTelefono: '',
    Correo: '',
    FechaNacimiento: '',
    Usuario: '',
    Contrasena: ''
  };

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {}

  saveNewUsuario() {
    this.usuarioService.createUser(this.usuario).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/inicio-usuario']);
      },
      err => console.log(err)
    );
  }
}
