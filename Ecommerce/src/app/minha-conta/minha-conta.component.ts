import { ReactiveFormsRuleService } from 'ng-form-rules';
import { Cartao } from './../cadastro/shared/cartao.model';
import { Endereco, ResponseEnderecos, ClienteEnd } from './../cadastro/shared/endereco.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../cadastro/shared/cliente.model';
import { FormBuilder } from '@angular/forms';
import { CadastroService } from '../cadastro/shared/cadastro.service';
import { AlterarInfoService } from '../minha-conta/shared/alterar-info.service'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  id: string;
  clienteId: number;
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

  endereco: any = {
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

    this.request = JSON.parse(localStorage['cliente']);
    this.id = this.route.snapshot.paramMap.get('id');
    this.request.dtNasc = this.datepipe.transform(this.request.dtNasc, 'yyyy-MM-dd');
    this.getEnderecoCliente();

  }

  //Método para atualização de dados cadastrais (OK)
  updateDadosCliente() {

    this.cliente = JSON.parse(localStorage['cliente']);
    console.log(this.request);
    this.cadastroService.updateDadosCadastrais(this.request).subscribe(response => {

      this.clienteResponse = response;
      console.log(this.clienteResponse);
      console.log('cliente');
      localStorage.setItem('cliente', JSON.stringify(this.cliente));
    });

    alert('Dados alterados com sucesso!!!');
    window.location.reload(); 
  }

  //Método para inclusão de endereços (OK)
  cliente: Cliente
  postEnderecoCliente() {

    this.cliente = JSON.parse(localStorage['cliente']);
    this.clienteId = this.cliente.idCliente;
    console.log(this.cliente)

    this.cadastroService.postEndereco(this.clienteId, this.endereco).subscribe(response => {
      this.endereco = response;
      console.log(this.clienteId);
      console.log(this.endereco);
    });
    alert('Endereço cadastrado com sucesso!');
  }

  //Método para atualização de endereços (ToDo)
  putEnderecoCliente() {

    this.endereco = JSON.parse(localStorage['endereco']); console.log(this.endereco);
    this.cadastroService.updateEnderecos(this.request).subscribe(response => {
      this.endereco = response;

      alert('Endereço alterado com sucesso!!!');
    })
  }

  primeiroEndereco: any;
  enderecoteste: ClienteEnd;
  //Método para buscar endereços
  getEnderecoCliente() {

    this.cliente = JSON.parse(localStorage['cliente']);
    this.clienteId = this.cliente.idCliente;
    this.cadastroService.getEndereco(this.clienteId).subscribe(response => {
      this.enderecoteste = response;

      console.log(this.enderecoteste);
      console.log(response);//idcliente+array endereço
      console.log(this.enderecoteste.enderecos[0]);//primeira posição do array de endereços
      this.primeiroEndereco = this.enderecoteste.enderecos[0];//Retorna o objeto endereço no array
      
    })
  }

  //Método para exclusão de endereço (ToDo)
  deleteEnderecoCliente() {
    if (confirm(`Deseja excluir o endereço selecionado?`)) {

      this.cliente = JSON.parse(localStorage['cliente']);
      this.endereco = this.cliente.enderecos[0].idEndereco;
      console.log(this.endereco);

      this.cadastroService.deleteEndereco(this.clienteId, this.endereco).subscribe();
      this.cliente.enderecos.splice(0, 1);//Exclui posição do array

      //Reload no loalstorage após as alterações
      localStorage.setItem('cliente', JSON.stringify(this.cliente));

      alert("Endereço excluido com sucesso!!!");
      window.location.reload();
    }

  }

}
