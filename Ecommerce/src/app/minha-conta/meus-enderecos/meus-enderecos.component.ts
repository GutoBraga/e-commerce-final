import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/cadastro/shared/cliente.model';
import { Endereco } from 'src/app/cadastro/shared/endereco.model';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsRuleService } from 'ng-form-rules';

@Component({
  selector: 'app-meus-enderecos',
  templateUrl: './meus-enderecos.component.html',
  styleUrls: ['./meus-enderecos.component.css']
})
export class MeusEnderecosComponent implements OnInit {

  cliente: Cliente;
  endereco: Endereco;

  request: Endereco = {
    idEndereco: null,
    dsEndereco: '',
    nrEndereco: '',
    nrCep: '',
    dsBairro: '',
    dsCidade: '',
    sgEstado: '',
    nmCompleto: ''
  }

  constructor(
    private validaCad: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private svc: ReactiveFormsRuleService
  ) { }

  ngOnInit(): void {
    this.getCliente();
  }

  private getCliente() {
    this.cliente = JSON.parse(localStorage['cliente']);
  }

  private getEndereco() {
    this.cliente = JSON.parse(localStorage['cliente']);
    console.log(this.cliente.enderecos[0].nrCep)
  }

}
