import { Component, Input, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { Enfermedad } from '../Modelos/Enfermedad.model'; 
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-enfermedad-form-modal',
  templateUrl: './enfermedad-form-modal.component.html',
  styleUrls: ['./enfermedad-form-modal.component.css']
})
export class EnfermedadFormModalComponent implements OnInit {
  @Input() enfermedad: Enfermedad = {
    idEnfermedad: 0,
    descripcion: ""
  };
  @Output() guardarEnfermedad = new EventEmitter<Enfermedad>();  

  constructor(
    @Inject(NgbActiveModal) public activeModal: NgbActiveModal,
    private adminService: AdminServiceService
  ) {}

  ngOnInit(): void {
  }

  guardar() {
    this.guardarEnfermedad.emit(this.enfermedad);
    this.activeModal.close();
  }

  cancelar() {
    this.activeModal.dismiss();
  }
}
