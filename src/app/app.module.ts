import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuinesSomosComponent } from './quines-somos/quines-somos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FooterComponent } from './footer/footer.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { MenuComponent } from './menu/menu.component';
import { HomeMedicoComponent } from './home-medico/home-medico.component';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { UsuarioFormModalComponent } from './usuario-form-modal/usuario-form-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioCitasComponent } from './usuario-citas/usuario-citas.component';
import { CitaFormModalComponent } from './cita-form-modal/cita-form-modal.component';
import { MedicoCitasComponent } from './medico-citas/medico-citas.component';
import { DiagnosticoFormModalComponent } from './diagnostico-form-modal/diagnostico-form-modal.component';
import { TratamientoFormModalComponent } from './tratamiento-form-modal/tratamiento-form-modal.component';
import { AdminEspecialidadComponent } from './admin-especialidad/admin-especialidad.component';
import { EspecialidadMedicaFormModalComponent } from './especialidad-medica-form-modal/especialidad-medica-form-modal.component';
import { AdminEnfermedadComponent } from './admin-enfermedad/admin-enfermedad.component';
import { EnfermedadFormModalComponent } from './enfermedad-form-modal/enfermedad-form-modal.component';
import { AdminMarcaMedicamentoComponent } from './admin-marca-medicamento/admin-marca-medicamento.component';
import { MarcaMedicamentoFormModalComponent } from './marca-medicamento-form-modal/marca-medicamento-form-modal.component';
import { AdminTipoMedicamentoComponent } from './admin-tipo-medicamento/admin-tipo-medicamento.component';
import { TipoMedicamentoFormModalComponent } from './tipo-medicamento-form-modal/tipo-medicamento-form-modal.component';
import { AdminMedicamentoComponent } from './admin-medicamento/admin-medicamento.component';
import { MedicamentoFormModalComponent } from './medicamento-form-modal/medicamento-form-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactoComponent,
    QuinesSomosComponent,
    ServiciosComponent,
    FooterComponent,
    HomeAdminComponent,
    MenuComponent,
    HomeMedicoComponent,
    HomeUsuarioComponent,
    AdminUsuariosComponent,
    UsuarioFormModalComponent,
    UsuarioCitasComponent,
    CitaFormModalComponent,
    MedicoCitasComponent,
    DiagnosticoFormModalComponent,
    TratamientoFormModalComponent,
    AdminEspecialidadComponent,
    EspecialidadMedicaFormModalComponent,
    AdminEnfermedadComponent,
    EnfermedadFormModalComponent,
    AdminMarcaMedicamentoComponent,
    MarcaMedicamentoFormModalComponent,
    AdminTipoMedicamentoComponent,
    TipoMedicamentoFormModalComponent,
    AdminMedicamentoComponent,
    MedicamentoFormModalComponent
    
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule,    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule, CommonModule,MatListModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
