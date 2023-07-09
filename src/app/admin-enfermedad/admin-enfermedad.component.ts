import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Enfermedad } from '../Modelos/Enfermedad.model';
import { EnfermedadFormModalComponent } from '../enfermedad-form-modal/enfermedad-form-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-enfermedad',
  templateUrl: './admin-enfermedad.component.html',
  styleUrls: ['./admin-enfermedad.component.css']
})
export class AdminEnfermedadComponent implements OnInit {

  enfermedad: Enfermedad[] = [];


  constructor(private backendService: AdminServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.obtenerEnfermedad(); // Llama a la función para obtener la lista de especialidades

  }

  obtenerEnfermedad() {
    this.backendService.obtenerEnfermedad().subscribe(
      (response: any[]) => {
        this.enfermedad = response; // Almacena la lista de especialidades en la variable
      },
      (error) => {
        console.error('Error al obtener la lista de enfermedades:', error);
      }
    );
  }

  editarEnfermedad(enfermedad: Enfermedad) {
    // Lógica para editar la especialidad
  }
  
  eliminarEnfermedad(enfermedad: Enfermedad) {
    this.backendService.eliminarEnfermedad(enfermedad.idEnfermedad).subscribe({
      next: () => {
        // Eliminación exitosa, realiza alguna acción adicional si es necesario
        console.log('Enfermedad eliminada');
        // Actualiza la lista de especialidades después de eliminar
        this.obtenerEnfermedad();
      },
      error: (error) => {
        console.error('Error al eliminar la enfermedad:', error);
      }
    });
  }

  abrirModalCrearEnfermedad() {
    const modalRef = this.modalService.open(EnfermedadFormModalComponent);
    modalRef.componentInstance.enfermedad = {}; // Objeto literal para representar una especialidad vacío

    modalRef.componentInstance.guardarEnfermedad.subscribe((enfermedad: Enfermedad) => {
      this.backendService.crearEnfermedad(enfermedad).subscribe(
        (response: Enfermedad) => {
          console.log('Enfermedad guardada:', response);
          // Actualiza la lista de especialidades después de guardar
          this.obtenerEnfermedad();
          modalRef.close(); // Cierra el modal después de guardar
        },
        (error) => {
          console.error('Error al guardar la enfermedad:', error);
        }
      );
    });
  }

  abrirModalEditarEnfermedad(enfermedad: Enfermedad) {
    const modalRef = this.modalService.open(EnfermedadFormModalComponent);
    modalRef.componentInstance.enfermedad = { ...enfermedad }; // Copiar la especialidad para evitar modificar el original
  
    modalRef.componentInstance.guardarEnfermedad.subscribe({
      next: (enfermedad: Enfermedad) => {
        this.backendService.actualizarEnfermedad(enfermedad).subscribe({
          next: (response: Enfermedad) => {
            console.log('Enfermedad editada:', response);
            // Actualiza la lista de especialidades después de editar
            this.obtenerEnfermedad();
          },
          error: (error) => {
            console.error('Error al editar la enfermedad:', error);
          }
        });
      }
    });
  }

  crearEnfermedad() {
    // Lógica para crear una nueva especialidad
  }
}
