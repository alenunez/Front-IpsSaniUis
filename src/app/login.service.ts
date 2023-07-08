import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from './Modelos/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(correoElectronico: string, contrasena: string): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/usuario/login', { correoElectronico, contrasena });
  }
}
