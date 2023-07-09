import { Component, Input, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { EspecialidadMedica } from '../Modelos/EspecialidadMedica.model'; 
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-especialidad-medica-form-modal',
  templateUrl: './especialidad-medica-form-modal.component.html',
  styleUrls: ['./especialidad-medica-form-modal.component.css']
})
export class EspecialidadMedicaFormModalComponent implements OnInit {
  @Input() especialidadMedica: EspecialidadMedica = {
    idEspecialidadMedica: 0,
    descripcion: ""
  };
  @Output() guardarEspecialidadMedica = new EventEmitter<EspecialidadMedica>();  

  constructor(
    @Inject(NgbActiveModal) public activeModal: NgbActiveModal,
    private adminService: AdminServiceService
  ) {}

  ngOnInit(): void {
  }

  guardar() {
    this.guardarEspecialidadMedica.emit(this.especialidadMedica);
    this.activeModal.close();
  }

  cancelar() {
    this.activeModal.dismiss();
  }
}
