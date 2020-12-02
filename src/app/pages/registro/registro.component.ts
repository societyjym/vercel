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
  public validacion:any;
  public validarLogin:boolean=true;

  constructor(activateRoute: ActivatedRoute, private usuariosService: UsuariosService) {
    this.validacion = {
      username:null,
      password:null
    }
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    //  this.usuariosService.loginUsuario(this.validacion).subscribe( respuesta =>{
    //    console.log("respuesta", respuesta)
    //  })
  }
}
