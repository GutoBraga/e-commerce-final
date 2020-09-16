import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../cadastro/shared/cliente.model';
import { Cartao } from 'src/app/cadastro/shared/cartao.model';
import { AlterarSenha } from '../alterar-senha/alterar-senha.model'


@Injectable({
  providedIn: 'root'
})
export class AlterarInfoService {
  
  constructor(private http: HttpClient) { }
  
  private readonly API = 'api/novoCartao';

  private readonly APIaltSenha = 'api/atualizarSenha';

  postCartao(idCliente: number, request: Cartao): Observable<Cartao> {
    const URL = `${this.API}/${idCliente}`;
    return this.http.post<Cartao>(URL, request);
  }

  putSenha(request: AlterarSenha): Observable<AlterarSenha> {
    return this.http.put<AlterarSenha>(this.APIaltSenha, request)
  }

}
