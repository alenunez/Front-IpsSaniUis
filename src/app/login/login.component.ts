import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correoElectronico: string = '';
  contrasena: string = '';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.login(this.correoElectronico, this.contrasena)
      .subscribe({
        next: response => {
          // El inicio de sesión fue exitoso, hacer algo con la respuesta
          console.log('Inicio de sesión exitoso:', response);
        },
        error: error => {
          // Ocurrió un error durante el inicio de sesión
          console.error('Contraseña incorrecta. Error durante el inicio de sesión:', error);
        }
      });
  }
}
