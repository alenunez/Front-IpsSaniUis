import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuinesSomosComponent } from './quines-somos/quines-somos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeMedicoComponent } from './home-medico/home-medico.component';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';



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
{path: 'homeUsuario', component:HomeUsuarioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
