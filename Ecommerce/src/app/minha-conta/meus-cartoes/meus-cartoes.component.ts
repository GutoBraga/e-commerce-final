import { Cartao } from './../../cadastro/shared/cartao.model';
import { Endereco } from './../../cadastro/shared/endereco.model';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/cadastro/shared/cliente.model';
import { AlterarInfoService } from '../shared/alterar-info.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsRuleService } from 'ng-form-rules';

@Component({
  selector: 'app-meus-cartoes',
  templateUrl: './meus-cartoes.component.html',
  styleUrls: ['./meus-cartoes.component.css']
})
export class MeusCartoesComponent implements OnInit {

  cliente: Cliente;
  endereco: Endereco;

  request: Cartao = {
    idCartaoCredito: null,
    nrNumeroCartao: '',
    nmNomeTitular: '',
    idCliente: null
  }

  constructor(
    private alterarInfoService: AlterarInfoService,
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

  inserirCartao() {
    console.log(this.cliente.cartoesCreditoDTO)
    this.cliente = JSON.parse(localStorage['cliente']);
    this.alterarInfoService.postCartao(this.cliente.idCliente, this.request).subscribe();
    alert("Cartão Inserido com Sucesso");
    console.log(this.request)
  }

}
