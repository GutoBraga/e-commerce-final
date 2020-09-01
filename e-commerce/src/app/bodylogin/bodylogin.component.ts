import { Router } from '@angular/router';
import { responseCliente } from './shared/responseCliente.model';
import { Cliente } from './shared/cliente.model';
import { Endereco } from './shared/endereco.model';
import { Cartao } from './shared/cartao.model';
import { LoginService } from './shared/login.service';
import { Login } from './shared/login.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodylogin',
  templateUrl: './bodylogin.component.html',
  styleUrls: ['./bodylogin.component.css']
})
export class BodyloginComponent implements OnInit {

  request: Login = {

    login: "",
    senha: ""
  }

  cartao: Cartao = {
    idCartaoCredito: null,
    nrNumeroCartao: null,
    nmNomeTitular: null,
    idCliente: null
  }

  endereco: Endereco = {

    idEndereco: null,
    dsEndereco: null,
    nrEndereco: null,
    nrCep: null,
    dsBairro: null,
    dsCidade: null,
    sgEstado: null,
    nmCompleto: null,

  }

  cliente : Cliente = {

    idCliente: null,
    nmCliente: null,
    nrCpf: null,
    dsEmail: null,
    dtNasc: null,
    dsGenero: null,
    nrTelefone1: null,
    nrTelefone2: null,
    pwCliente: null,
    enderecos: [],
    cartoesCreditoDTO: this.cartao

  }

  responsecliente: responseCliente = {
    status: null,
    mensagem: null,
    retorno: this.cliente,
    dtTimestampErro: null,
  }

  constructor(private loginService: LoginService, private router: Router) {
  }

  logar(): void {
    console.log(this.request)
    this.loginService.postCliente(this.request).subscribe(
      request=> {this.responsecliente = request;
        console.log(this.responsecliente);
        localStorage['cliente']=JSON.stringify(this.responsecliente.retorno)
        this.router.navigate(['']);
        //idCliente: string;
        //idCliente = this.cliente=JSON.parse(localStorage ['cliente.idCliente'])//Recuperar informação
      }
    );
    alert("Cliente logado com sucesso!")
  }

  ngOnInit(): void {
  }

}
