import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(correoElectronico: string, contrasena: string) {
    return this.http.post<any>('http://localhost:8080/usuario/login', { correoElectronico, contrasena })
      .pipe(map(response => {
        // Verificar la respuesta del servidor y devolverla
        if (response) {
          return response;
        }
        throw new Error('Credenciales inválidas');
      }));
  }
}
