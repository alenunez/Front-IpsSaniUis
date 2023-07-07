import { Component, Input, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { Usuario } from '../Modelos/Usuario.model'; 
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminServiceService } from '../admin-service.service';
import { Rol } from '../Modelos/Rol.model';

@Component({
  selector: 'app-usuario-form-modal',
  templateUrl: './usuario-form-modal.component.html',
  styleUrls: ['./usuario-form-modal.component.css']
})
export class UsuarioFormModalComponent implements OnInit {
  @Input() usuario: Usuario = {
    idUsuario: 0,
    primerNombre: '',
    primerApellido: '',
    segundoApellido: '',
    documentoIdentidad: '',
    correoElectronico: '',
    idRol: 0,
    contrasena:'',
    descripcionRol:''
  };
  @Output() guardarUsuario = new EventEmitter<Usuario>();
  roles: Rol[] = []; // Lista de roles

  constructor(
    @Inject(NgbActiveModal) public activeModal: NgbActiveModal,
    private adminService: AdminServiceService
  ) {}

  ngOnInit(): void {
    this.obtenerRoles(); // Obtener los roles al inicializar el componente
  }

  obtenerRoles() {
    this.adminService.obtenerRoles().subscribe(
      (response: Rol[]) => {
        this.roles = response; // Almacena la lista de roles en la variable
      },
      (error) => {
        console.error('Error al obtener la lista de roles:', error);
      }
    );
  }

  guardar() {
    this.guardarUsuario.emit(this.usuario);
    this.activeModal.close();
  }

  cancelar() {
    this.activeModal.dismiss();
  }
}
