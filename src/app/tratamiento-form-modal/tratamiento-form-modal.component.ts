import { Component, Input, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CitaFormModalComponent } from '../cita-form-modal/cita-form-modal.component';
import { Tratamiento } from '../Modelos/Tratamiento.model';
import { MedicoServiceService } from '../medico-service.service';

@Component({
  selector: 'app-tratamiento-form-modal',
  templateUrl: './tratamiento-form-modal.component.html',
  styleUrls: ['./tratamiento-form-modal.component.css']
})
export class TratamientoFormModalComponent implements OnInit {
  @Input() tratamiento: Tratamiento = {
    idTratamiento: 0,
    idCitaMedica: 0,
    descripcion: ''
  };
  @Input() tratamientoExistente: Tratamiento | null = null; // Agrega el input para el tratamiento existente
  @Output() guardarTratamiento = new EventEmitter<Tratamiento>();

  constructor(
    @Inject(NgbActiveModal) public activeModal: NgbActiveModal,
    private adminService: MedicoServiceService
  ) {}

  ngOnInit(): void {
    // Verifica si existe un tratamiento existente y lo asigna al tratamiento actual
    if (this.tratamientoExistente) {
      this.tratamiento = { ...this.tratamientoExistente };
    }
  }

  guardar() {
    this.guardarTratamiento.emit(this.tratamiento);
    this.activeModal.close();
  }

  cancelar() {
    this.activeModal.dismiss();
  }
}
