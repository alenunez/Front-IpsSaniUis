import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuinesSomosComponent } from './quines-somos/quines-somos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeMedicoComponent } from './home-medico/home-medico.component';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { UsuarioFormModalComponent } from './usuario-form-modal/usuario-form-modal.component';
import { UsuarioCitasComponent } from './usuario-citas/usuario-citas.component';
import { CitaFormModalComponent } from './cita-form-modal/cita-form-modal.component';
import { MedicoCitasComponent } from './medico-citas/medico-citas.component';
import { AdminEspecialidadComponent } from './admin-especialidad/admin-especialidad.component';
import { AdminEnfermedadComponent } from './admin-enfermedad/admin-enfermedad.component';
import { AdminMarcaMedicamentoComponent } from './admin-marca-medicamento/admin-marca-medicamento.component';
import { AdminTipoMedicamentoComponent } from './admin-tipo-medicamento/admin-tipo-medicamento.component';
import { AdminMedicamentoComponent } from './admin-medicamento/admin-medicamento.component';



const routes: Routes = [  {
  path: '',
  component: HomeComponent
},

{ path: 'login', component: LoginComponent },
{ path: 'contacto', component: ContactoComponent },
{ path: 'quienes-somos', component: QuinesSomosComponent },
{ path: 'servicios', component: ServiciosComponent },
{path: 'homeAdmin', component:HomeAdminComponent},
{path: 'homeMedico', component:HomeMedicoComponent},
{path: 'homeUsuario', component:HomeUsuarioComponent},
{path: 'adminUsuario' ,component:AdminUsuariosComponent},
{path: 'crearUsuario' ,component:UsuarioFormModalComponent},
{path: 'usuarioCitas' ,component:UsuarioCitasComponent},
{path: 'crearCita' ,component:CitaFormModalComponent},
{path: 'medicoCitas' ,component:MedicoCitasComponent},
{path: 'adminEspecialidad', component:AdminEspecialidadComponent},
{path: 'adminEnfermedad', component:AdminEnfermedadComponent},
{path: 'adminMarcaMedicamento', component:AdminMarcaMedicamentoComponent},
{path: 'adminTipoMedicamento', component:AdminTipoMedicamentoComponent},
{path: 'adminMedicamento', component:AdminMedicamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
