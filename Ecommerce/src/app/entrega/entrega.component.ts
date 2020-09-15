import { Endereco } from './../cadastro/shared/endereco.model';
import { ReactiveFormsRuleService } from 'ng-form-rules';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cadastro/shared/cliente.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {

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
