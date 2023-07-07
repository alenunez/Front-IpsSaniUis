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
    UsuarioFormModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule,    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule, CommonModule,MatListModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
