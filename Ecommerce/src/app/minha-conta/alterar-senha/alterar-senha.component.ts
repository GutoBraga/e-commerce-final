import { Component, OnInit } from '@angular/core';
import { AlterarInfoService } from '../shared/alterar-info.service';
import { Cliente } from 'src/app/cadastro/shared/cliente.model';
import { AlterarSenha } from './alterar-senha.model';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {

  cliente: Cliente;

  request: AlterarSenha = {
    idCliente: null,
    senhaAtual: '',
    novaSenha: '',
    confirmarSenha: ''
  }

  constructor(private alterarInfo: AlterarInfoService) { }

  ngOnInit(): void {
  }

  alterarSenha() {
    this.cliente = JSON.parse(localStorage['cliente']);
    this.request.idCliente = this.cliente.idCliente;
    this.alterarInfo.putSenha(this.request).subscribe(response => {
      this.request = response;
      
    })
    console.log("idcliente: " + this.request.idCliente);
    console.log("senhaAtual: " + this.request.senhaAtual);
    console.log("novaSenha: " + this.request.novaSenha);
    console.log("confirmarSenha: " + this.request.confirmarSenha);
  }
}
