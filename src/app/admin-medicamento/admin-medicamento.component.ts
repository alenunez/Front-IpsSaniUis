import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Medicamento } from '../Modelos/Medicamento.model';
import { MedicamentoFormModalComponent } from '../medicamento-form-modal/medicamento-form-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-medicamento',
  templateUrl: './admin-medicamento.component.html',
  styleUrls: ['./admin-medicamento.component.css']
})
export class AdminMedicamentoComponent implements OnInit {

  medicamento: Medicamento[] = [];
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
    this.obtenerMedicamento(); // Llama a la función para obtener la lista de medicamentos

  }
  logout(){
    localStorage.removeItem("usuario");
    localStorage.removeItem("Rol");
    localStorage.removeItem("usuario");
    localStorage.removeItem("idUsuario");
    localStorage.removeItem("idRol");
    location.href="/";
  }


  obtenerMedicamento() {
    this.backendService.obtenerMedicamento().subscribe(
      (response: any[]) => {
        this.medicamento = response; // Almacena la lista de medicamentos en la variable
      },
      (error) => {
        console.error('Error al obtener la lista de medicamentos:', error);
      }
    );
  }

  editarMedicamento(medicamento: Medicamento) {
    // Lógica para editar el medicamento
  }
  
  eliminarMedicamento(medicamento: Medicamento) {
    this.backendService.eliminarMedicamento(medicamento.idMedicamento).subscribe({
      next: () => {
        // Eliminación exitosa, realiza alguna acción adicional si es necesario
        console.log('Medicamento eliminado');
        // Actualiza la lista de medicamentos después de eliminar
        this.obtenerMedicamento();
      },
      error: (error) => {
        console.error('Error al eliminar el medicamento:', error);
      }
    });
  }

  abrirModalCrearMedicamento() {
    const modalRef = this.modalService.open(MedicamentoFormModalComponent);
    modalRef.componentInstance.medicamento = {}; // Objeto literal para representar un medicamento vacío

    modalRef.componentInstance.guardarMedicamento.subscribe((medicamento: Medicamento) => {
      this.backendService.crearMedicamento(medicamento).subscribe(
        (response: Medicamento) => {
          console.log('Medicamento guardado:', response);
          // Actualiza la lista de medicamentos después de guardar
          this.obtenerMedicamento();
          modalRef.close(); // Cierra el modal después de guardar
        },
        (error) => {
          console.error('Error al guardar el medicamento:', error);
        }
      );
    });
  }

  abrirModalEditarMedicamento(medicamento: Medicamento) {
    const modalRef = this.modalService.open(MedicamentoFormModalComponent);
    modalRef.componentInstance.medicamento = { ...medicamento }; // Copiar el medicamento para evitar modificar el original
  
    modalRef.componentInstance.guardarMedicamento.subscribe({
      next: (medicamento: Medicamento) => {
        this.backendService.actualizarMedicamento(medicamento).subscribe({
          next: (response: Medicamento) => {
            console.log('Medicamento editado:', response);
            // Actualiza la lista de medicamentos después de editar
            this.obtenerMedicamento();
          },
          error: (error) => {
            console.error('Error al editar el medicamento:', error);
          }
        });
      }
    });
  }

  crearMedicamento() {
    // Lógica para crear un nuevo medicamento
  }
}
