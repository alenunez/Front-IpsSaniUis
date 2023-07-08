import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CitaMedica } from '../Modelos/CitaMedica.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioserviceService } from '../usuarioservice.service';
import { EspecialidadMedicaDto } from '../Modelos/EspecialidadMedica.model';
import { Medico } from '../Modelos/Medico.model';

@Component({
  selector: 'app-cita-form-modal',
  templateUrl: './cita-form-modal.component.html',
  styleUrls: ['./cita-form-modal.component.css']
})
export class CitaFormModalComponent implements OnInit {
  @Input() citaMedica: CitaMedica = {
    idCitaMedica: 0,
    fechaCita: new Date(),
    horaCita: {
      hours: 0,
      minutes: 0
    },
    idUsuario:0,
    primerNombreUsuario: '',
    primerNombreMedico: '',
    primerApellidoMedico: '',
    primerApellidoUsuario: '',
    idMedico: 0
  };
  @Output() guardarCita = new EventEmitter<CitaMedica>();
  especialidades: EspecialidadMedicaDto[] = [];
  medicos: Medico[] = [];
  selectedEspecialidad: number | undefined;

  constructor(
    public activeModal: NgbActiveModal,
    private usuarioService: UsuarioserviceService
  ) {}

  ngOnInit(): void {
    this.obtenerEspecialidades();
    this.citaMedica.idUsuario=parseInt(localStorage.getItem("idUsuario") ?? "0", 10)
  }

  obtenerEspecialidades() {
    this.usuarioService.obtenerEspecialidad().subscribe({
      next: (response: EspecialidadMedicaDto[]) => {
        this.especialidades = response;
      },
      error: (error) => {
        console.error('Error al obtener la lista de especialidades:', error);
      }
    });
  }

  obtenerMedicosPorEspecialidad() {
    const idEspecialidad = this.selectedEspecialidad;
    if (idEspecialidad) {
      this.usuarioService.obtenerMedicosPorEspecialidad(idEspecialidad).subscribe({
        next: (response: Medico[]) => {
          this.medicos = response;
        },
        error: (error) => {
          console.error('Error al obtener la lista de médicos:', error);
        }
      });
    }
  }

  guardar() {
    this.guardarCita.emit(this.citaMedica);
    this.activeModal.close();
  }

  cancelar() {
    this.activeModal.dismiss();
  }
}
