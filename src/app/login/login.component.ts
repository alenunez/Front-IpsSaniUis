import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  correoElectronico: string = '';
  contrasena: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loginService.login(this.correoElectronico, this.contrasena).subscribe({
      next: (response) => {
        // El inicio de sesión fue exitoso, hacer algo con la respuesta
        console.log('Inicio de sesión exitoso:', response);
        if (response === 4) {
          // Redirigir al componente deseado para el rol 1
          this.router.navigate(['/homeAdmin']); 
        };
        if (response ===3) {
          // Redirigir al componente deseado para el rol 2
          this.router.navigate(['/homeMedico']); 
        };
        if (response === 1) {
          // Redirigir al componente deseado para el rol 3
          this.router.navigate(['/homeUsuario']); 
        }
      },
      error: (error) => {
        // Ocurrió un error durante el inicio de sesión
        console.error(
          'Contraseña incorrecta. Error durante el inicio de sesión:',
          error
        );
      },
    });
  }
}
