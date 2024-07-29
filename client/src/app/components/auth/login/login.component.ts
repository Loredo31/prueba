import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string | null = null;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onSubmit(loginForm: any) {
    if (loginForm.invalid) {
      this.errorMessage = 'Los campos no pueden estar vacíos';
      return;
    }

    const { username, password } = loginForm.value;

    console.log('Datos del formulario:', { username, password });

    this.usuarioService.getUsuarios().subscribe(
      (usuarios: any[]) => {
        console.log('Usuarios obtenidos:', usuarios);
        const usuario = usuarios.find(u => u.Usuario === username && u.Contrasena === password);

        if (usuario) {
          console.log('Usuario encontrado:', usuario);
          this.router.navigate(['/inicio-usuario']);
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos';
          console.log('Usuario o contraseña incorrectos');
        }
      },
      error => {
        this.errorMessage = 'Error al validar usuario';
        console.error('Error fetching users:', error);
      }
    );
  }
}
