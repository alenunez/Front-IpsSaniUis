import { Injectable } from '@angular/core';
import { CitaMedica } from './Modelos/CitaMedica.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tratamiento } from './Modelos/Tratamiento.model';
import { Enfermedad } from './Modelos/Enfermedad.model';
import { Diagnostico } from './Modelos/Diagnostico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoServiceService {

  constructor(private http: HttpClient) { }

  obtenerCitas(id: number): Observable<CitaMedica[]> {
    const url = `https://back-endipssaniuis-production.up.railway.app/citaMedica/all/medico/id/${id}`; 
    return this.http.get<CitaMedica[]>(url);
  }
  obtenerCitasFinalizadas(id: number): Observable<CitaMedica[]> {
    const url = `https://back-endipssaniuis-production.up.railway.app/citaMedica/all/medico/finalizada/id/${id}`; 
    return this.http.get<CitaMedica[]>(url);
  }

  actualizarTratamiento(tratamiento: Tratamiento): Observable<Tratamiento> {
    const url = `https://back-endipssaniuis-production.up.railway.app/tratamiento/update`;
    return this.http.put<Tratamiento>(url, tratamiento);
  }
  crearTratamiento(tratamiento: Tratamiento): Observable<Tratamiento> {
    const url = `https://back-endipssaniuis-production.up.railway.app/tratamiento/insert`;
    return this.http.post<Tratamiento>(url, tratamiento);
  }
  obtenerTratamiento(id: number): Observable<Tratamiento> {
    const url = `https://back-endipssaniuis-production.up.railway.app/tratamiento/idCita/${id}`; 
    return this.http.get<Tratamiento>(url);
  }

  obtenerEnfermedades(): Observable<Enfermedad[]> {
    const url = `https://back-endipssaniuis-production.up.railway.app/enfermedad/all`; 
    return this.http.get<Enfermedad[]>(url);
  }

  obtenerDiagnostico(id: number): Observable<Diagnostico> {
    const url = `https://back-endipssaniuis-production.up.railway.app/diagnostico/idCita/${id}`; 
    return this.http.get<Diagnostico>(url);
  }

  actualizarDiagnostico(diagnostico: Diagnostico): Observable<Diagnostico> {
    const url = `https://back-endipssaniuis-production.up.railway.app/diagnostico/update`;
    return this.http.put<Diagnostico>(url, diagnostico);
  }
  crearDiagnostico(diagnostico: Diagnostico): Observable<Diagnostico> {
    const url = `https://back-endipssaniuis-production.up.railway.app/diagnostico/insert`;
    return this.http.post<Diagnostico>(url, diagnostico);
  }

  finalizarCita(citaMedica: CitaMedica): Observable<CitaMedica> {
    const url = `https://back-endipssaniuis-production.up.railway.app/citaMedica/finalizar`;
    return this.http.put<CitaMedica>(url, citaMedica);
  }


  cancelarCita(citaMedica: CitaMedica): Observable<CitaMedica> {
    const url = `https://back-endipssaniuis-production.up.railway.app/citaMedica/cancelar`;
    return this.http.put<CitaMedica>(url, citaMedica);
  }
  
}
