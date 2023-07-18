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
    const url = 'https://back-endipssaniuis-production.up.railway.app/usuario/all'; // Reemplaza 'usuarios' por la ruta correcta de tu endpoint
    return this.http.get<Usuario[]>(url);
  }

  eliminarUsuario(id: number): Observable<any> {
    const url = `https://back-endipssaniuis-production.up.railway.app/usuario/id/${id}`;
    return this.http.delete(url);
  }

  actualizarUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `https://back-endipssaniuis-production.up.railway.app/usuario/update`;
    return this.http.put<Usuario>(url, usuario);
  }
  crearUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `https://back-endipssaniuis-production.up.railway.app/usuario/insert`;
    return this.http.post<Usuario>(url, usuario);
  }

  obtenerRoles(): Observable<Rol[]> {
    const url = 'https://back-endipssaniuis-production.up.railway.app/rol/all'; // Reemplaza 'roles' por la ruta correcta de tu endpoint
    return this.http.get<Rol[]>(url);
  }

  obtenerEspecialidadMedica(): Observable<EspecialidadMedica[]> {
    const url = 'https://back-endipssaniuis-production.up.railway.app/especialidadMedica/all';
    return this.http.get<EspecialidadMedica[]>(url);
  }

  eliminarEspecialidadMedica(id: number): Observable<any> {
    const url = `https://back-endipssaniuis-production.up.railway.app/especialidadMedica/id/${id}`;
    return this.http.delete(url);
  }

  actualizarEspecialidadMedica(especialidadMedica: EspecialidadMedica): Observable<EspecialidadMedica> {
    const url = `https://back-endipssaniuis-production.up.railway.app/especialidadMedica/update`;
    return this.http.put<EspecialidadMedica>(url, especialidadMedica);
  }
  crearEspecialidadMedica(especialidadMedica: EspecialidadMedica): Observable<EspecialidadMedica> {
    const url = `https://back-endipssaniuis-production.up.railway.app/especialidadMedica/insert`;
    return this.http.post<EspecialidadMedica>(url, especialidadMedica);
  }

  obtenerEnfermedad(): Observable<Enfermedad[]> {
    const url = 'https://back-endipssaniuis-production.up.railway.app/enfermedad/all'; // Reemplaza 'roles' por la ruta correcta de tu endpoint
    return this.http.get<Enfermedad[]>(url);
  }

  eliminarEnfermedad(id: number): Observable<any> {
    const url = `https://back-endipssaniuis-production.up.railway.app/enfermedad/id/${id}`;
    return this.http.delete(url);
  }

  actualizarEnfermedad(enfermedad: Enfermedad): Observable<Enfermedad> {
    const url = `https://back-endipssaniuis-production.up.railway.app/enfermedad/update`;
    return this.http.put<Enfermedad>(url, enfermedad);
  }
  crearEnfermedad(enfermedad: Enfermedad): Observable<Enfermedad> {
    const url = `https://back-endipssaniuis-production.up.railway.app/enfermedad/insert`;
    return this.http.post<Enfermedad>(url, enfermedad);
  }

  obtenerMarcaMedicamento(): Observable<MarcaMedicamento[]> {
    const url = 'https://back-endipssaniuis-production.up.railway.app/marcaMedicamento/all'; // Reemplaza 'roles' por la ruta correcta de tu endpoint
    return this.http.get<MarcaMedicamento[]>(url);
  }
  
  eliminarMarcaMedicamento(id: number): Observable<any> {
    const url = `https://back-endipssaniuis-production.up.railway.app/marcaMedicamento/id/${id}`;
    return this.http.delete(url);
  }

  actualizarMarcaMedicamento(marcaMedicamento: MarcaMedicamento): Observable<MarcaMedicamento> {
    const url = `https://back-endipssaniuis-production.up.railway.app/marcaMedicamento/update`;
    return this.http.put<MarcaMedicamento>(url, marcaMedicamento);
  }
  crearMarcaMedicamento(marcaMedicamento: MarcaMedicamento): Observable<MarcaMedicamento> {
    const url = `https://back-endipssaniuis-production.up.railway.app/marcaMedicamento/insert`;
    return this.http.post<MarcaMedicamento>(url, marcaMedicamento);
  }

  obtenerTipoMedicamento(): Observable<TipoMedicamento[]> {
    const url = 'https://back-endipssaniuis-production.up.railway.app/tipoMedicamento/all'; // Reemplaza 'roles' por la ruta correcta de tu endpoint
    return this.http.get<TipoMedicamento[]>(url);
  }
  
  eliminarTipoMedicamento(id: number): Observable<any> {
    const url = `https://back-endipssaniuis-production.up.railway.app/tipoMedicamento/id/${id}`;
    return this.http.delete(url);
  }

  actualizarTipoMedicamento(tipoMedicamento: TipoMedicamento): Observable<TipoMedicamento> {
    const url = `https://back-endipssaniuis-production.up.railway.app/tipoMedicamento/update`;
    return this.http.put<TipoMedicamento>(url, tipoMedicamento);
  }
  crearTipoMedicamento(tipoMedicamento: TipoMedicamento): Observable<TipoMedicamento> {
    const url = `https://back-endipssaniuis-production.up.railway.app/tipoMedicamento/insert`;
    return this.http.post<TipoMedicamento>(url, tipoMedicamento);
  }

  obtenerMedicamento(): Observable<Medicamento[]> {
    const url = 'https://back-endipssaniuis-production.up.railway.app/medicamento/all'; // Reemplaza 'roles' por la ruta correcta de tu endpoint
    return this.http.get<Medicamento[]>(url);
  }

  eliminarMedicamento(id: number): Observable<any> {
    const url = `https://back-endipssaniuis-production.up.railway.app/medicamento/id/${id}`;
    return this.http.delete(url);
  }

  actualizarMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    const url = `https://back-endipssaniuis-production.up.railway.app/medicamento/update`;
    return this.http.put<Medicamento>(url, medicamento);
  }
  crearMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    const url = `https://back-endipssaniuis-production.up.railway.app/medicamento/insert`;
    return this.http.post<Medicamento>(url, medicamento);
  }
}