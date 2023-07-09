import { Component, Input, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Diagnostico } from '../Modelos/Diagnostico.model';
import { MedicoServiceService } from '../medico-service.service';
import { Enfermedad } from '../Modelos/Enfermedad.model';

@Component({
  selector: 'app-diagnostico-form-modal',
  templateUrl: './diagnostico-form-modal.component.html',
  styleUrls: ['./diagnostico-form-modal.component.css']
})
export class DiagnosticoFormModalComponent implements OnInit {
  @Input() diagnostico: Diagnostico = {
    idDiagnostico: 0,
    idCitaMedica: 0,
    idEnfermedad: 0,
    comentario: ''
  };
  @Output() guardarDiagnostico = new EventEmitter<Diagnostico>();
  enfermedades: Enfermedad[] = [];
  @Input() diagnosticoExistente: Diagnostico | null = null;



  constructor(
    @Inject(NgbActiveModal) public activeModal: NgbActiveModal,
    private medicoService: MedicoServiceService
  ) {}

  obtenerEnfermedades() {
    this.medicoService.obtenerEnfermedades().subscribe(
      (response: Enfermedad[]) => {
        this.enfermedades = response;
      },
      (error: any) => {
        console.error('Error al obtener las enfermedades:', error);
      }
    );
  }

  ngOnInit(): void {
    this.obtenerEnfermedades()

  }

  guardar() {
    this.guardarDiagnostico.emit(this.diagnostico);
    this.activeModal.close();
  }

  cancelar() {
    this.activeModal.dismiss();
  }
}
