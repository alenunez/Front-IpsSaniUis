import { Component, Input, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { MarcaMedicamento } from '../Modelos/MarcaMedicamento.model'; 
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-marca-medicamento-form-modal',
  templateUrl: './marca-medicamento-form-modal.component.html',
  styleUrls: ['./marca-medicamento-form-modal.component.css']
})
export class MarcaMedicamentoFormModalComponent implements OnInit {
  @Input() marcaMedicamento: MarcaMedicamento = {
    idMarcaMedicamento: 0,
    descripcion: ""
  };
  @Output() guardarMarcaMedicamento = new EventEmitter<MarcaMedicamento>();  

  constructor(
    @Inject(NgbActiveModal) public activeModal: NgbActiveModal,
    private adminService: AdminServiceService
  ) {}

  ngOnInit(): void {
  }

  guardar() {
    this.guardarMarcaMedicamento.emit(this.marcaMedicamento);
    this.activeModal.close();
  }
  
  cancelar() {
    this.activeModal.dismiss();
  }
}
