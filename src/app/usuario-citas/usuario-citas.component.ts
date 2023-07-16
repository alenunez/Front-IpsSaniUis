import { Component, OnInit } from '@angular/core';
import { UsuarioserviceService } from '../usuarioservice.service'; 
import { CitaMedica } from '../Modelos/CitaMedica.model'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CitaFormModalComponent } from '../cita-form-modal/cita-form-modal.component';

@Component({
  selector: 'app-usuario-citas',
  templateUrl: './usuario-citas.component.html',
  styleUrls: ['./usuario-citas.component.css']
})
export class UsuarioCitasComponent implements OnInit {

  citas: CitaMedica[] = [];
  idUser: number = parseInt(localStorage.getItem("idUsuario") ?? "0", 10);
  usuario:any={};
  rol:any={};


  constructor(private backendService: UsuarioserviceService, private modalService: NgbModal) { }

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
    this.obtenerCitas(); // Llama a la función para obtener la lista de usuarios
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

  obtenerCitas() {
    this.backendService.obtenerCitas(this.idUser).subscribe({
      next: (response: CitaMedica[]) => {
        this.citas = response; // Almacena la lista de citas en la variable
      },
      error: (error) => {
        console.error('Error al obtener la lista de citas:', error);
      }
    });
  }

  eliminarCita(cita: CitaMedica) {
    this.backendService.eliminarCita(cita.idCitaMedica).subscribe({
      next: () => {
        // Eliminación exitosa, realiza alguna acción adicional si es necesario
        console.log('Cita eliminada');
        // Actualiza la lista de usuarios después de eliminar
        this.obtenerCitas();
      },
      error: (error) => {
        console.error('Error al eliminar la cita:', error);
      }
    });
  }

  abrirModalCrearCita() {
    const modalRef = this.modalService.open(CitaFormModalComponent);
    modalRef.componentInstance.citaMedica = {}; // Objeto literal para representar una cita vacía

    modalRef.componentInstance.guardarCita.subscribe((citaMedica: CitaMedica) => {
      this.backendService.crearCita(citaMedica).subscribe(
        (response: CitaMedica) => {
          console.log('Cita guardada:', response);
          // Actualiza la lista de citas después de guardar
          this.obtenerCitas();
          modalRef.close(); // Cierra el modal después de guardar
        },
        (error: any) => {
          console.error('Error al guardar la cita:', error);
        }
      );
    });
  }

  abrirModalEditarCita(citaMedica: CitaMedica) {
    const modalRef = this.modalService.open(CitaFormModalComponent);
    modalRef.componentInstance.citaMedica = { ...citaMedica }; // Copiar la cita para evitar modificar la original

    modalRef.componentInstance.guardarCita.subscribe((cita: CitaMedica) => {
      this.backendService.actualizarCita(cita).subscribe(
        (response: CitaMedica) => {
          console.log('Cita editada:', response);
          // Actualiza la lista de citas después de editar
          this.obtenerCitas();
        },
        (error: any) => {
          console.error('Error al editar la cita:', error);
        }
      );
    });
  }
}
