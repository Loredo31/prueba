import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena2',
  templateUrl: './recuperar-contrasena2.component.html',
  styleUrls: ['./recuperar-contrasena2.component.css']
})
export class RecuperarContrasena2Component {
  password1: string = '';
  password2: string = '';
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.password1 !== this.password2) {
      this.errorMessage = 'Las contraseñas no coinciden.';
    } else {
      this.errorMessage = null;
      this.router.navigate(['/login']);
    }
  }

  onCancel() {
    this.router.navigate(['/home']);
  }
}
