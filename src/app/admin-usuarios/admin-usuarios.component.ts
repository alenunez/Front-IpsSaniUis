import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Usuario } from '../Modelos/Usuario.model';
import { UsuarioFormModalComponent } from '../usuario-form-modal/usuario-form-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];


  constructor(private backendService: AdminServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.obtenerUsuarios(); // Llama a la función para obtener la lista de usuarios

  }

  obtenerUsuarios() {
    this.backendService.obtenerUsuarios().subscribe(
      (response: any[]) => {
        this.usuarios = response; // Almacena la lista de usuarios en la variable
      },
      (error) => {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    );
  }

  editarUsuario(usuario: Usuario) {
    // Lógica para editar el usuario
  }
  
  eliminarUsuario(usuario: Usuario) {
    this.backendService.eliminarUsuario(usuario.idUsuario).subscribe({
      next: () => {
        // Eliminación exitosa, realiza alguna acción adicional si es necesario
        console.log('Usuario eliminado');
        // Actualiza la lista de usuarios después de eliminar
        this.obtenerUsuarios();
      },
      error: (error) => {
        console.error('Error al eliminar el usuario:', error);
      }
    });
  }

  abrirModalCrearUsuario() {
    const modalRef = this.modalService.open(UsuarioFormModalComponent);
    modalRef.componentInstance.usuario = {}; // Objeto literal para representar un usuario vacío

    modalRef.componentInstance.guardarUsuario.subscribe((usuario: Usuario) => {
      this.backendService.crearUsuario(usuario).subscribe(
        (response: Usuario) => {
          console.log('Usuario guardado:', response);
          // Actualiza la lista de usuarios después de guardar
          this.obtenerUsuarios();
          modalRef.close(); // Cierra el modal después de guardar
        },
        (error) => {
          console.error('Error al guardar el usuario:', error);
        }
      );
    });
  }

  abrirModalEditarUsuario(usuario: Usuario) {
    const modalRef = this.modalService.open(UsuarioFormModalComponent);
    modalRef.componentInstance.usuario = { ...usuario }; // Copiar el usuario para evitar modificar el original
  
    modalRef.componentInstance.guardarUsuario.subscribe({
      next: (usuario: Usuario) => {
        this.backendService.actualizarUsuario(usuario).subscribe({
          next: (response: Usuario) => {
            console.log('Usuario editado:', response);
            // Actualiza la lista de usuarios después de editar
            this.obtenerUsuarios();
          },
          error: (error) => {
            console.error('Error al editar el usuario:', error);
          }
        });
      }
    });
  }

  crearUsuario() {
    // Lógica para crear un nuevo usuario
  }
}
















