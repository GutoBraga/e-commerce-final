import { Endereco } from './../../bodylogin/shared/endereco.model';
import { ClienteUpdate } from './../../bodylogin/shared/cliente.model';
import { Cadastro } from './cadastro.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/bodylogin/shared/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  constructor(private http: HttpClient) { }

  private readonly API = 'api/novoCadastro';

  private readonly APIupdate = 'api/novoEndereco';

  //Criar novo cadastro
  postCadastro(request: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.API, request);
  }

  //Consulta de clientes
  getCadastro(){
    return this.http.get<CadastroService[]>(this.API);
  }

  //Atualizar cadastro
  updateCadastro(nrCpf: String, request: Cadastro): Observable<Cadastro>{
    const URL = `${this.API}/${nrCpf}`;
    return this.http.put<Cadastro>(URL, request);
  }

  //Deletar cadastro
  deleteCadastro(nrCpf: String, request: Cadastro): Observable<Cadastro>{
    const URL = `${this.API}/${nrCpf}`;
    return this.http.delete<Cadastro>(URL);
  }

  updateEndereco({ id, request }: { id: number; request: Endereco; }): Observable<Endereco> {
    const URL = `${this.APIupdate}/${id}`;
    return this.http.put<Endereco>(URL, request);
  }
}
