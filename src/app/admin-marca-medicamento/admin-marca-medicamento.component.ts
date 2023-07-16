import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { MarcaMedicamento } from '../Modelos/MarcaMedicamento.model';
import { MarcaMedicamentoFormModalComponent } from '../marca-medicamento-form-modal/marca-medicamento-form-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-marca-medicamento',
  templateUrl: './admin-marca-medicamento.component.html',
  styleUrls: ['./admin-marca-medicamento.component.css']
})
export class AdminMarcaMedicamentoComponent implements OnInit {

  marcaMedicamento: MarcaMedicamento[] = [];
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
    this.obtenerMarcaMedicamento(); // Llama a la función para obtener la lista de especialidades

  }
  logout(){
    localStorage.removeItem("usuario");
    localStorage.removeItem("Rol");
    localStorage.removeItem("usuario");
    localStorage.removeItem("idUsuario");
    localStorage.removeItem("idRol");
    location.href="/";
  }

  
  obtenerMarcaMedicamento() {
    this.backendService.obtenerMarcaMedicamento().subscribe(
      (response: any[]) => {
        this.marcaMedicamento = response; // Almacena la lista de especialidades en la variable
      },
      (error) => {
        console.error('Error al obtener la lista de marcas:', error);
      }
    );
  }

  editarMarcaMedicamento(marcaMedicamento: MarcaMedicamento) {
    // Lógica para editar la especialidad
  }
  
  eliminarMarcaMedicamento(marcaMedicamento: MarcaMedicamento) {
    this.backendService.eliminarMarcaMedicamento(marcaMedicamento.idMarcaMedicamento).subscribe({
      next: () => {
        // Eliminación exitosa, realiza alguna acción adicional si es necesario
        console.log('Marca medicamento eliminada');
        // Actualiza la lista de especialidades después de eliminar
        this.obtenerMarcaMedicamento();
      },
      error: (error) => {
        console.error('Error al eliminar la marca:', error);
      }
    });
  }

  abrirModalCrearMarcaMedicamento() {
    const modalRef = this.modalService.open(MarcaMedicamentoFormModalComponent);
    modalRef.componentInstance.marcaMedicamento = {}; // Objeto literal para representar una especialidad vacío

    modalRef.componentInstance.guardarMarcaMedicamento.subscribe((marcaMedicamento: MarcaMedicamento) => {
      this.backendService.crearMarcaMedicamento(marcaMedicamento).subscribe(
        (response: MarcaMedicamento) => {
          console.log('Marca medicamento guardada:', response);
          // Actualiza la lista de especialidades después de guardar
          this.obtenerMarcaMedicamento();
          modalRef.close(); // Cierra el modal después de guardar
        },
        (error) => {
          console.error('Error al guardar la marca:', error);
        }
      );
    });
  }

  abrirModalEditarMarcaMedicamento(marcaMedicamento: MarcaMedicamento) {
    const modalRef = this.modalService.open(MarcaMedicamentoFormModalComponent);
    modalRef.componentInstance.marcaMedicamento = { ...marcaMedicamento }; // Copiar la especialidad para evitar modificar el original
  
    modalRef.componentInstance.guardarMarcaMedicamento.subscribe({
      next: (marcaMedicamento: MarcaMedicamento) => {
        this.backendService.actualizarMarcaMedicamento(marcaMedicamento).subscribe({
          next: (response: MarcaMedicamento) => {
            console.log('MarcaMedicamento editada:', response);
            // Actualiza la lista de especialidades después de editar
            this.obtenerMarcaMedicamento();
          },
          error: (error) => {
            console.error('Error al editar la marca:', error);
          }
        });
      }
    });
  }

  crearMarcaMedicamento() {
    // Lógica para crear una nueva especialidad
  }
}
