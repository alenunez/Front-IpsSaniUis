import { Injectable } from '@angular/core';
import { CitaMedica } from './Modelos/CitaMedica.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EspecialidadMedica } from './Modelos/EspecialidadMedica.model';
import { Usuario } from './Modelos/Usuario.model';
import { Medico } from './Modelos/Medico.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioserviceService {

  constructor(private http: HttpClient) {     
  }

  obtenerCitas(id: number): Observable<CitaMedica[]> {
    const url = `http://localhost:8080/citaMedica/all/usuario/id/${id}`; 
    return this.http.get<CitaMedica[]>(url);
  }

  eliminarCita(id: number): Observable<any> {
    const url = `http://localhost:8080/citaMedica/id/${id}`;
    return this.http.delete(url);
  }

  obtenerMedicosPorEspecialidad(idEspecialidad: number): Observable<Medico[]> {
    const url = `http://localhost:8080/medico/especialidad/${idEspecialidad}`; 
    return this.http.get<Medico[]>(url);
  }

  obtenerUsuarioPorId(id: number): Observable<Usuario[]> {
    const url = `http://localhost:8080/usuario/id/${id}`; 
    return this.http.get<Usuario[]>(url);
  }
  
  obtenerEspecialidadMedica(): Observable<EspecialidadMedica[]> {
    const url = `http://localhost:8080/especialidadMedica/all`; 
    return this.http.get<EspecialidadMedica[]>(url);
  }

  actualizarCita(citaMedica: CitaMedica): Observable<CitaMedica> {
    const url = `http://localhost:8080/citaMedica/update`;
    return this.http.put<CitaMedica>(url, citaMedica);
  }
  crearCita(citaMedica: CitaMedica): Observable<CitaMedica> {
    const url = `http://localhost:8080/citaMedica/insert`;
    return this.http.post<CitaMedica>(url, citaMedica);
  }
  
  
}
