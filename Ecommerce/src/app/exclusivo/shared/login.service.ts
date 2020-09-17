import { responseCliente } from './responseCliente.model';
import { Cliente } from './cliente.model';
import { Endereco } from './endereco.model';
import { Cartao } from './cartao.model';
import { Login } from './login.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }

  private readonly API = 'api/login';

  postCliente(request: Login): Observable<responseCliente> {
    return this.http.post<responseCliente>(this.API, request);
  }


}
