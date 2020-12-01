import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import { UsuariosService } from "../../services/basededatos/usuarios.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public articuloJson:any;
  public renderArticulo:any;
  public login:boolean=false;
  public usuario: string;
  public password: string;
  public usuariosJson:any;
  public renderUsuario:any;
  public validarLogin:boolean=true;

  constructor(activateRoute: ActivatedRoute, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    this.usuariosService.getUsuarios()
    .subscribe(respuesta =>{
      this.usuariosJson = respuesta;
    })

    this.renderUsuario = this.usuariosJson.find(result => {
      if (result.usuario == this.usuario && result.password == this.password){
        return true;
      }else{
        return false;
      }
    })

    if (this.renderUsuario) {
      this.login = true;
    }else{
      this.validarLogin = false;
    }


  }
}
