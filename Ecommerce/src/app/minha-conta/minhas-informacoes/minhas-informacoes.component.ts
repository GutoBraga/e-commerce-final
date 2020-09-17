import { Component, OnInit } from '@angular/core';
import { Cartao } from 'src/app/cadastro/shared/cartao.model';
import { Cliente } from 'src/app/cadastro/shared/cliente.model';
import { Endereco } from 'src/app/cadastro/shared/endereco.model';
import { AlterarInfoService } from '../shared/alterar-info.service';
import { CadastroService } from 'src/app/cadastro/shared/cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsRuleService } from 'ng-form-rules';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-minhas-informacoes',
  templateUrl: './minhas-informacoes.component.html',
  styleUrls: ['./minhas-informacoes.component.css']
})
export class MinhasInformacoesComponent implements OnInit {

  cliente: Cliente
  id: string;
  idCliente: number;
  cartao: Cartao;
  clienteResponse: Cliente;

  request: any = {
    idCliente: '',
    nmCliente: '',
    nrCpf: '',
    dsEmail: '',
    dtNasc: '',
    dsGenero: '',
    nrTelefone1: '',
    nrTelefone2: '',
    pwCliente: '',
    confirmarSenha: '',
    enderecos: [],
  }

  endereco: Endereco = {
    idEndereco: null,
    dsEndereco: '',
    nrEndereco: '',
    nrCep: '',
    dsBairro: '',
    dsCidade: '',
    sgEstado: '',
    nmCompleto: ''
  };

  constructor(

    private alteraInfoService: AlterarInfoService,
    private cadastroService: CadastroService,
    private validaCad: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private svc: ReactiveFormsRuleService,
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    /* this.getCliente(); */
    this.request = JSON.parse(localStorage['cliente']);
    this.id = this.route.snapshot.paramMap.get('id');
    this.request.dtNasc = this.datepipe.transform(this.request.dtNasc, 'yyyy-MM-dd');
  }

  private getCliente() { }

  //Método para atualização de dados cadastrais (OK)
  updateDadosCliente() {

    this.cliente = JSON.parse(localStorage['cliente']);
    console.log(this.request);
    this.cadastroService.updateDadosCadastrais(this.request).subscribe(response => {

      this.clienteResponse = response;
      console.log(this.clienteResponse);
      console.log('cliente');
      this.cliente.nmCliente = this.request.nmCliente
      localStorage.setItem('cliente', JSON.stringify(this.cliente));

      alert('Dados alterados com sucesso!!!');
      window.location.reload();
    });

  }

  //Métod para inserir dados cadastrais
  postEnderecoCliente() {
    this.cadastroService.postEndereco(this.idCliente, this.endereco).subscribe(response => {
      this.endereco = response;
      console.log(this.idCliente);
      console.log(this.endereco);
    });

    alert('Endereço cadastrado com sucesso!');
  }



}
