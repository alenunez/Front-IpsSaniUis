import { Component, OnInit } from '@angular/core';
import { MedicoServiceService } from '../medico-service.service';
import { CitaMedica } from '../Modelos/CitaMedica.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TratamientoFormModalComponent } from '../tratamiento-form-modal/tratamiento-form-modal.component';
import { Tratamiento } from '../Modelos/Tratamiento.model';
import { DiagnosticoFormModalComponent } from '../diagnostico-form-modal/diagnostico-form-modal.component';
import { Diagnostico } from '../Modelos/Diagnostico.model';
import { UsuarioFormModalComponent } from '../usuario-form-modal/usuario-form-modal.component';
import { UsuarioserviceService } from '../usuarioservice.service';

@Component({
  selector: 'app-usuario-citas-finalizadas',
  templateUrl: './usuario-citas-finalizadas.component.html',
  styleUrls: ['./usuario-citas-finalizadas.component.css']
})
export class UsuarioCitasFinalizadasComponent implements OnInit {
  citas: CitaMedica[] = [];
  tratamiento: Tratamiento[]=[];
  idCitaMedica: number=0; // Asegúrate de tener el valor de idCitaMedica disponible
  tratamientoExistente: Tratamiento | null = null;
  tratamientoModalCerrado: boolean = false;
  diagnosticoExistente: Diagnostico | null = null;
  usuario:any={};
  rol:any={};

  idUser: number = parseInt(localStorage.getItem("idUsuario") ?? "0", 10);

  constructor(private backendService: MedicoServiceService, private modalService: NgbModal,private backendServiceUsuario: UsuarioserviceService) { }

  ngOnInit(): void {
    this.usuario = (localStorage.getItem("usuario"));
    this.rol =(sessionStorage.getItem("Rol"));
    if(!this.usuario){
      location.href="/";
    }
    else if(this.rol =="Administrador"){
      location.href="/homeAdmin";

    }
    else if(this.rol =="Cliente"){
      location.href="/homeUsuario";

    }
    this.obtenerCitasFinalizadas(); // Llama a la función para obtener la lista de usuarios
    console.log(this.idUser)
  }
  logout(){
    localStorage.removeItem("usuario");
    localStorage.removeItem("Rol");
    localStorage.removeItem("usuario");
    localStorage.removeItem("idUsuario");
    localStorage.removeItem("idRol");
    location.href="/";
  }

  obtenerCitasFinalizadas() {
    this.backendServiceUsuario.obtenerCitasFinalizadas(this.idUser).subscribe({
      next: (response: CitaMedica[]) => {
        this.citas = response; // Almacena la lista de citas en la variable
      },
      error: (error) => {
        console.error('Error al obtener la lista de citas:', error);
      }
    });
  }

  abrirModalCrearTratamiento(usuario: CitaMedica) {
    // Obtener el tratamiento existente
    this.backendService.obtenerTratamiento(usuario.idCitaMedica).subscribe(
      (response: Tratamiento) => {
        this.tratamientoExistente = response;

        const modalRef = this.modalService.open(TratamientoFormModalComponent);
        modalRef.componentInstance.tratamiento = {
          idTratamiento: 0,
          idCitaMedica: usuario.idCitaMedica,
          descripcion: ''
        };

        // Pasar el tratamiento existente al modal
        modalRef.componentInstance.tratamientoExistente = this.tratamientoExistente;

        modalRef.componentInstance.guardarTratamiento.subscribe((tratamiento: Tratamiento) => {
          if (this.tratamientoExistente) {
            // Actualizar el tratamiento existente
            this.backendService.actualizarTratamiento(tratamiento).subscribe(
              (response: Tratamiento) => {
                console.log('Tratamiento actualizado:', response);
                modalRef.close();
              },
              (error: any) => {
                console.error('Error al actualizar el tratamiento:', error);
              }
            );
          } else {
            // Crear un nuevo tratamiento
            this.backendService.crearTratamiento(tratamiento).subscribe(
              (response: Tratamiento) => {
                console.log('Tratamiento guardado:', response);
                modalRef.close();
              },
              (error: any) => {
                console.error('Error al guardar el tratamiento:', error);
              }
            );
          }
        });
      },
      (error: any) => {
        console.error('Error al obtener el tratamiento:', error);
      }
    );
  }

  abrirModalDiagnostico(usuario: CitaMedica) {
    // Obtener el diagnóstico existente
    this.backendService.obtenerDiagnostico(usuario.idCitaMedica).subscribe(
      (response: Diagnostico) => {
        this.diagnosticoExistente = response;

        const modalRef = this.modalService.open(DiagnosticoFormModalComponent);
        modalRef.componentInstance.diagnostico = {
          idDiagnostico: 0,
          idCitaMedica: usuario.idCitaMedica,
          idEnfermedad: this.diagnosticoExistente ? this.diagnosticoExistente.idEnfermedad : 0,
          comentario: this.diagnosticoExistente ? this.diagnosticoExistente.comentario : ''
        };

        // Pasar el diagnóstico existente al modal
        modalRef.componentInstance.diagnosticoExistente = this.diagnosticoExistente;

        modalRef.componentInstance.guardarDiagnostico.subscribe((diagnostico: Diagnostico) => {
          if (this.diagnosticoExistente) {
            // Actualizar el diagnóstico existente
            this.backendService.actualizarDiagnostico(diagnostico).subscribe(
              (response: Diagnostico) => {
                console.log('Diagnóstico actualizado:', response);
                modalRef.close();
              },
              (error: any) => {
                console.error('Error al actualizar el diagnóstico:', error);
              }
            );
          } else {
            // Crear un nuevo diagnóstico
            this.backendService.crearDiagnostico(diagnostico).subscribe(
              (response: Diagnostico) => {
                console.log('Diagnóstico creado:', response);
                modalRef.close();
              },
              (error: any) => {
                console.error('Error al crear el diagnóstico:', error);
              }
            );
          }
        });
      },
      (error: any) => {
        console.error('Error al obtener el diagnóstico:', error);
      }
    );
  }

}
