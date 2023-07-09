import { Component, Input, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { TipoMedicamento } from '../Modelos/TipoMedicamento.model'; 
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-tipo-medicamento-form-modal',
  templateUrl: './tipo-medicamento-form-modal.component.html',
  styleUrls: ['./tipo-medicamento-form-modal.component.css']
})
export class TipoMedicamentoFormModalComponent implements OnInit {
  @Input() tipoMedicamento: TipoMedicamento = {
    idTipoMedicamento: 0,
    descripcion: ""
  };
  @Output() guardarTipoMedicamento = new EventEmitter<TipoMedicamento>();  

  constructor(
    @Inject(NgbActiveModal) public activeModal: NgbActiveModal,
    private adminService: AdminServiceService
  ) {}

  ngOnInit(): void {
  }

  guardar() {
    this.guardarTipoMedicamento.emit(this.tipoMedicamento);
    this.activeModal.close();
  }
  
  cancelar() {
    this.activeModal.dismiss();
  }
}
