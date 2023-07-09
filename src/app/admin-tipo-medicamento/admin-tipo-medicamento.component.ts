import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { TipoMedicamento } from '../Modelos/TipoMedicamento.model';
import { TipoMedicamentoFormModalComponent } from '../tipo-medicamento-form-modal/tipo-medicamento-form-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-tipo-medicamento',
  templateUrl: './admin-tipo-medicamento.component.html',
  styleUrls: ['./admin-tipo-medicamento.component.css']
})
export class AdminTipoMedicamentoComponent implements OnInit {

  tipoMedicamento: TipoMedicamento[] = [];


  constructor(private backendService: AdminServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.obtenerTipoMedicamento(); // Llama a la función para obtener la lista de especialidades

  }
  
  obtenerTipoMedicamento() {
    this.backendService.obtenerTipoMedicamento().subscribe(
      (response: any[]) => {
        this.tipoMedicamento = response; // Almacena la lista de especialidades en la variable
      },
      (error) => {
        console.error('Error al obtener la lista de tipos:', error);
      }
    );
  }

  editarTipoMedicamento(tipoMedicamento: TipoMedicamento) {
    // Lógica para editar la especialidad
  }
  
  eliminarTipoMedicamento(tipoMedicamento: TipoMedicamento) {
    this.backendService.eliminarTipoMedicamento(tipoMedicamento.idTipoMedicamento).subscribe({
      next: () => {
        // Eliminación exitosa, realiza alguna acción adicional si es necesario
        console.log('Tipo medicamento eliminada');
        // Actualiza la lista de especialidades después de eliminar
        this.obtenerTipoMedicamento();
      },
      error: (error) => {
        console.error('Error al eliminar la tipo:', error);
      }
    });
  }

  abrirModalCrearTipoMedicamento() {
    const modalRef = this.modalService.open(TipoMedicamentoFormModalComponent);
    modalRef.componentInstance.tipoMedicamento = {}; // Objeto literal para representar una especialidad vacío

    modalRef.componentInstance.guardarTipoMedicamento.subscribe((tipoMedicamento: TipoMedicamento) => {
      this.backendService.crearTipoMedicamento(tipoMedicamento).subscribe(
        (response: TipoMedicamento) => {
          console.log('Tipo medicamento guardada:', response);
          // Actualiza la lista de especialidades después de guardar
          this.obtenerTipoMedicamento();
          modalRef.close(); // Cierra el modal después de guardar
        },
        (error) => {
          console.error('Error al guardar el tipo medicamento:', error);
        }
      );
    });
  }
  
  abrirModalEditarTipoMedicamento(tipoMedicamento: TipoMedicamento) {
    const modalRef = this.modalService.open(TipoMedicamentoFormModalComponent);
    modalRef.componentInstance.tipoMedicamento = { ...tipoMedicamento }; // Copiar la especialidad para evitar modificar el original
  
    modalRef.componentInstance.guardarTipoMedicamento.subscribe({
      next: (tipoMedicamento: TipoMedicamento) => {
        this.backendService.actualizarTipoMedicamento(tipoMedicamento).subscribe({
          next: (response: TipoMedicamento) => {
            console.log('Tipo medicamento editado:', response);
            // Actualiza la lista de especialidades después de editar
            this.obtenerTipoMedicamento();
          },
          error: (error) => {
            console.error('Error al editar la tipo:', error);
          }
        });
      }
    });
  }

  crearTipoMedicamento() {
    // Lógica para crear una nueva especialidad
  }
}
