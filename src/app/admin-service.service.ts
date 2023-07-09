import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './Modelos/Usuario.model';
import { Rol } from './Modelos/Rol.model';
import { EspecialidadMedica } from './Modelos/EspecialidadMedica.model';
import { Enfermedad } from './Modelos/Enfermedad.model';
import { MarcaMedicamento } from './Modelos/MarcaMedicamento.model';
import { TipoMedicamento } from './Modelos/TipoMedicamento.model';
import { Medicamento } from './Modelos/Medicamento.model';

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

  obtenerEspecialidadMedica(): Observable<EspecialidadMedica[]> {
    const url = 'http://localhost:8080/especialidadMedica/all';
    return this.http.get<EspecialidadMedica[]>(url);
  }

  eliminarEspecialidadMedica(id: number): Observable<any> {
    const url = `http://localhost:8080/especialidadMedica/id/${id}`;
    return this.http.delete(url);
  }

  actualizarEspecialidadMedica(especialidadMedica: EspecialidadMedica): Observable<EspecialidadMedica> {
    const url = `http://localhost:8080/especialidadMedica/update`;
    return this.http.put<EspecialidadMedica>(url, especialidadMedica);
  }
  crearEspecialidadMedica(especialidadMedica: EspecialidadMedica): Observable<EspecialidadMedica> {
    const url = `http://localhost:8080/especialidadMedica/insert`;
    return this.http.post<EspecialidadMedica>(url, especialidadMedica);
  }

  obtenerEnfermedad(): Observable<Enfermedad[]> {
    const url = 'http://localhost:8080/enfermedad/all'; // Reemplaza 'roles' por la ruta correcta de tu endpoint
    return this.http.get<Enfermedad[]>(url);
  }

  eliminarEnfermedad(id: number): Observable<any> {
    const url = `http://localhost:8080/enfermedad/id/${id}`;
    return this.http.delete(url);
  }

  actualizarEnfermedad(enfermedad: Enfermedad): Observable<Enfermedad> {
    const url = `http://localhost:8080/enfermedad/update`;
    return this.http.put<Enfermedad>(url, enfermedad);
  }
  crearEnfermedad(enfermedad: Enfermedad): Observable<Enfermedad> {
    const url = `http://localhost:8080/enfermedad/insert`;
    return this.http.post<Enfermedad>(url, enfermedad);
  }

  obtenerMarcaMedicamento(): Observable<MarcaMedicamento[]> {
    const url = 'http://localhost:8080/marcaMedicamento/all'; // Reemplaza 'roles' por la ruta correcta de tu endpoint
    return this.http.get<MarcaMedicamento[]>(url);
  }
  
  eliminarMarcaMedicamento(id: number): Observable<any> {
    const url = `http://localhost:8080/marcaMedicamento/id/${id}`;
    return this.http.delete(url);
  }

  actualizarMarcaMedicamento(marcaMedicamento: MarcaMedicamento): Observable<MarcaMedicamento> {
    const url = `http://localhost:8080/marcaMedicamento/update`;
    return this.http.put<MarcaMedicamento>(url, marcaMedicamento);
  }
  crearMarcaMedicamento(marcaMedicamento: MarcaMedicamento): Observable<MarcaMedicamento> {
    const url = `http://localhost:8080/marcaMedicamento/insert`;
    return this.http.post<MarcaMedicamento>(url, marcaMedicamento);
  }

  obtenerTipoMedicamento(): Observable<TipoMedicamento[]> {
    const url = 'http://localhost:8080/tipoMedicamento/all'; // Reemplaza 'roles' por la ruta correcta de tu endpoint
    return this.http.get<TipoMedicamento[]>(url);
  }
  
  eliminarTipoMedicamento(id: number): Observable<any> {
    const url = `http://localhost:8080/tipoMedicamento/id/${id}`;
    return this.http.delete(url);
  }

  actualizarTipoMedicamento(tipoMedicamento: TipoMedicamento): Observable<TipoMedicamento> {
    const url = `http://localhost:8080/tipoMedicamento/update`;
    return this.http.put<TipoMedicamento>(url, tipoMedicamento);
  }
  crearTipoMedicamento(tipoMedicamento: TipoMedicamento): Observable<TipoMedicamento> {
    const url = `http://localhost:8080/tipoMedicamento/insert`;
    return this.http.post<TipoMedicamento>(url, tipoMedicamento);
  }

  obtenerMedicamento(): Observable<Medicamento[]> {
    const url = 'http://localhost:8080/medicamento/all'; // Reemplaza 'roles' por la ruta correcta de tu endpoint
    return this.http.get<Medicamento[]>(url);
  }

  eliminarMedicamento(id: number): Observable<any> {
    const url = `http://localhost:8080/medicamento/id/${id}`;
    return this.http.delete(url);
  }

  actualizarMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    const url = `http://localhost:8080/medicamento/update`;
    return this.http.put<Medicamento>(url, medicamento);
  }
  crearMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    const url = `http://localhost:8080/medicamento/insert`;
    return this.http.post<Medicamento>(url, medicamento);
  }
}