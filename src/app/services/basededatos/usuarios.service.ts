import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Ruta } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public url: string;
  constructor(private  http: HttpClient) {

    this.url = Ruta.url;

  }
  loginUsuario(listaUsuario){

    const headers = new HttpHeaders({
    });

    return this.http.post(`${this.url}users/login/`, listaUsuario, {headers})
  }
}
