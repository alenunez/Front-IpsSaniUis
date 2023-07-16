import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Usuario } from '../Modelos/Usuario.model';

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
      next: (usuario: Usuario) => {
        // El inicio de sesión fue exitoso, hacer algo con el usuario
        console.log('Inicio de sesión exitoso:', usuario);
        if (usuario.idRol === 4) {
          // Redirigir al componente deseado para el rol 1
          this.router.navigate(['/homeAdmin']); 
        }
        else if (usuario.idRol === 3) {
          // Redirigir al componente deseado para el rol 2
          this.router.navigate(['/homeMedico']); 

        }
        else if (usuario.idRol === 1) {
          // Redirigir al componente deseado para el rol 3
          this.router.navigate(['/homeUsuario']); 
        }
        localStorage.setItem("idRol",usuario.idRol.toString())
        localStorage.setItem("idUsuario",usuario.idUsuario.toString())
        localStorage.setItem("Rol",usuario.descripcionRol.toString())
        localStorage.setItem("usuario", JSON.stringify(usuario)); 




      },
      error: (error) => {
        // Ocurrió un error durante el inicio de sesión
        console.error('Error durante el inicio de sesión:', error);
        alert('Usuario o contraseña incorrecta')
      },
    });
  }
}
