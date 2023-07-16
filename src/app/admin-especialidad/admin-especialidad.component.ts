import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { EspecialidadMedica } from '../Modelos/EspecialidadMedica.model';
import { EspecialidadMedicaFormModalComponent } from '../especialidad-medica-form-modal/especialidad-medica-form-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-especialidad',
  templateUrl: './admin-especialidad.component.html',
  styleUrls: ['./admin-especialidad.component.css']
})
export class AdminEspecialidadComponent implements OnInit {

  especialidadMedica: EspecialidadMedica[] = [];
  usuario:any={};
  rol:any={};


  constructor(private backendService: AdminServiceService, private modalService: NgbModal) { }

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
    this.obtenerEspecialidadMedica(); // Llama a la función para obtener la lista de especialidades

  }
  logout(){
    localStorage.removeItem("usuario");
    localStorage.removeItem("Rol");
    localStorage.removeItem("usuario");
    localStorage.removeItem("idUsuario");
    localStorage.removeItem("idRol");
    location.href="/";
  }


  obtenerEspecialidadMedica() {
    this.backendService.obtenerEspecialidadMedica().subscribe(
      (response: any[]) => {
        this.especialidadMedica = response; // Almacena la lista de especialidades en la variable
      },
      (error) => {
        console.error('Error al obtener la lista de especialidades:', error);
      }
    );
  }

  editarEspecialidadMedica(especialidadMedica: EspecialidadMedica) {
    // Lógica para editar la especialidad
  }
  
  eliminarEspecialidadMedica(especialidadMedica: EspecialidadMedica) {
    this.backendService.eliminarEspecialidadMedica(especialidadMedica.idEspecialidadMedica).subscribe({
      next: () => {
        // Eliminación exitosa, realiza alguna acción adicional si es necesario
        console.log('Especialidad medica eliminada');
        // Actualiza la lista de especialidades después de eliminar
        this.obtenerEspecialidadMedica();
      },
      error: (error) => {
        console.error('Error al eliminar la especialidad medica:', error);
      }
    });
  }

  abrirModalCrearEspecialidadMedica() {
    const modalRef = this.modalService.open(EspecialidadMedicaFormModalComponent);
    modalRef.componentInstance.especialidadMedica = {}; // Objeto literal para representar una especialidad vacío

    modalRef.componentInstance.guardarEspecialidadMedica.subscribe((especialidadMedica: EspecialidadMedica) => {
      this.backendService.crearEspecialidadMedica(especialidadMedica).subscribe(
        (response: EspecialidadMedica) => {
          console.log('Especialidad medica guardada:', response);
          // Actualiza la lista de especialidades después de guardar
          this.obtenerEspecialidadMedica();
          modalRef.close(); // Cierra el modal después de guardar
        },
        (error) => {
          console.error('Error al guardar la especialidad medica:', error);
        }
      );
    });
  }

  abrirModalEditarEspecialidadMedica(especialidadMedica: EspecialidadMedica) {
    const modalRef = this.modalService.open(EspecialidadMedicaFormModalComponent);
    modalRef.componentInstance.especialidadMedica = { ...especialidadMedica }; // Copiar la especialidad para evitar modificar el original
  
    modalRef.componentInstance.guardarEspecialidadMedica.subscribe({
      next: (especialidadMedica: EspecialidadMedica) => {
        this.backendService.actualizarEspecialidadMedica(especialidadMedica).subscribe({
          next: (response: EspecialidadMedica) => {
            console.log('Especialidad medica editada:', response);
            // Actualiza la lista de especialidades después de editar
            this.obtenerEspecialidadMedica();
          },
          error: (error) => {
            console.error('Error al editar la especialidad:', error);
          }
        });
      }
    });
  }

  crearEspecialidadMedica() {
    // Lógica para crear una nueva especialidad
  }
}
