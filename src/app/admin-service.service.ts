import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './Modelos/Usuario.model';
import { Rol } from './Modelos/Rol.model';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<Usuario[]> {
    const url = 'http://localhost:8080/usuario/all'; // Reemplaza 'usuarios' por la ruta correcta de tu endpoint
    return this.http.get<Usuario[]>(url);
  }

  eliminarUsuario(id: number): Observable<any> {
    const url = `http://localhost:8080/usuario/id/${id}`;
    return this.http.delete(url);
  }

  actualizarUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `http://localhost:8080/usuario/update`;
    return this.http.put<Usuario>(url, usuario);
  }
  crearUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `http://localhost:8080/usuario/insert`;
    return this.http.post<Usuario>(url, usuario);
  }

  obtenerRoles(): Observable<Rol[]> {
    const url = 'http://localhost:8080/rol/all'; // Reemplaza 'roles' por la ruta correcta de tu endpoint
    return this.http.get<Rol[]>(url);
  }
}
