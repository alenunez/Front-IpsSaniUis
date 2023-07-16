import { Component, Input, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { Medicamento } from '../Modelos/Medicamento.model'; 
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminServiceService } from '../admin-service.service';
import { TipoMedicamento } from '../Modelos/TipoMedicamento.model';
import { MarcaMedicamento } from '../Modelos/MarcaMedicamento.model';

@Component({
  selector: 'app-medicamento-form-modal',
  templateUrl: './medicamento-form-modal.component.html',
  styleUrls: ['./medicamento-form-modal.component.css']
})
export class MedicamentoFormModalComponent implements OnInit {
  @Input() medicamento: Medicamento = {
    idMedicamento: 0,
    descripcion: '',
    idTipoMedicamento: 0,
    descripcionTipoMedicamento:'',
    idMarcaMedicamento: 0,
    descripcionMarcaMedicamento:''
  };
  @Output() guardarMedicamento = new EventEmitter<Medicamento>();
  tipoMedicamento: TipoMedicamento[] = []; // Lista de tipoMedicamentos
  marcaMedicamento: MarcaMedicamento[] = []; // Lista de marcaMedicamentos

  constructor(
    @Inject(NgbActiveModal) public activeModal: NgbActiveModal,
    private adminService: AdminServiceService
  ) {}

  ngOnInit(): void {
    this.obtenerTipoMedicamento(); // Obtener los tipoMedicamentos al inicializar el componente
    this.obtenerMarcaMedicamento(); // Obtener los tipoMedicamentos al inicializar el componente
  }

  obtenerTipoMedicamento() {
    this.adminService.obtenerTipoMedicamento().subscribe(
      (response: TipoMedicamento[]) => {
        this.tipoMedicamento = response; // Almacena la lista de tipoMedicamentos en la variable
      },
      (error) => {
        console.error('Error al obtener la lista de tipo medicamentos:', error);
      }
    );
  }

  obtenerMarcaMedicamento() {
    this.adminService.obtenerMarcaMedicamento().subscribe(
      (response: MarcaMedicamento[]) => {
        this.marcaMedicamento = response; // Almacena la lista de marcaMedicamentos en la variable
      },
      (error) => {
        console.error('Error al obtener la lista de marca medicamentos:', error);
      }
    );
  }

  guardar() {
    this.guardarMedicamento.emit(this.medicamento);
    this.activeModal.close();
  }

  cancelar() {
    this.activeModal.dismiss();
  }
}
