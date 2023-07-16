import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent implements OnInit {
  usuario:any={};
  rol:any={};

  constructor() { }

  ngOnInit(): void {
    this.usuario = (localStorage.getItem("usuario"));
    this.rol =(sessionStorage.getItem("Rol"));
    if(!this.usuario){
      location.href="/";
    }
    else if(this.rol =="Administrador"){
      location.href="/homeAdmin";

    }
    else if(this.rol =="Cliente"){
      location.href="/homeUsuario";

    }
  }
  logout(){
    localStorage.removeItem("usuario");
    localStorage.removeItem("Rol");
    localStorage.removeItem("usuario");
    localStorage.removeItem("idUsuario");
    localStorage.removeItem("idRol");
    location.href="/";
  }

}
