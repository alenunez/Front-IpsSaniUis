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
    return this.http.post<Usuario>('https://back-endipssaniuis-production.up.railway.app/usuario/login', { correoElectronico, contrasena });
  }
}
