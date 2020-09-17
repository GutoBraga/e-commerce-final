import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cadastro/shared/cliente.model';
import { Cartao } from '../../cadastro/shared/cartao.model';
import { Endereco, ClienteEnd, ResponseEnderecos } from '../../cadastro/shared/endereco.model';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsRuleService } from 'ng-form-rules';
import { CadastroService } from '../../cadastro/shared/cadastro.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-meus-enderecos',
  templateUrl: './meus-enderecos.component.html',
  styleUrls: ['./meus-enderecos.component.css']
})
export class MeusEnderecosComponent implements OnInit {

  id: string;
  clienteId: number;
  cartao: Cartao;
  clienteResponse: Cliente;
  responseEndereco: ResponseEnderecos;

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

  enderecoInsere: any = {
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
    private cadastroService: CadastroService,
    private validaCad: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private svc: ReactiveFormsRuleService,
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getCliente();
    this.request = JSON.parse(localStorage['cliente']);
    this.id = this.route.snapshot.paramMap.get('id');
    this.request.dtNasc = this.datepipe.transform(this.request.dtNasc, 'yyyy-MM-dd');
    this.getEnderecoCliente();
  }

  private getCliente() {
    this.cliente = JSON.parse(localStorage['cliente']);
  }

  //Método para inclusão de endereços (OK)
  cliente: Cliente
  postEnderecoCliente() {

    this.cliente = JSON.parse(localStorage['cliente']);
    this.clienteId = this.cliente.idCliente;
    console.log(this.cliente)

    this.cadastroService.postEndereco(this.clienteId, this.enderecoInsere).subscribe(response => {
      this.enderecoInsere = response;
      console.log(this.clienteId);
      console.log(this.endereco);

      alert('Endereço cadastrado com sucesso!');
      console.log(this.endereco);
    });

  }

  //Método para atualização de endereços (ToDo)
  putEnderecoCliente() {

    /* this.endereco = JSON.parse(localStorage['endereco']); console.log(this.endereco); */
    this.cadastroService.updateEnderecos(this.enderecoteste.enderecos[0]).subscribe(response => {
      this.endereco = response;


      alert('Endereço alterado com sucesso!!!');
    })
  }


  //Método para buscar endereços (OK)
  primeiroEndereco: any;
  enderecoteste: ClienteEnd;
  getEnderecoCliente() {

    this.cliente = JSON.parse(localStorage['cliente']);
    this.clienteId = this.cliente.idCliente;
    this.cadastroService.getEndereco(this.clienteId).subscribe(response => {
      this.enderecoteste = response;

      console.log(this.enderecoteste.enderecos);
      this.primeiroEndereco = this.enderecoteste.enderecos[0];//Retorna o objeto endereço no array

    })
  }

  //Método para exclusão de endereço (OK)
  deleteEnderecoCliente(idEndereco: number) {
    if (confirm(`Deseja excluir o endereço selecionado?`)) {

      this.cliente = JSON.parse(localStorage['cliente']);
     
      console.log(this.endereco);

      this.cadastroService.deleteEndereco(this.clienteId, idEndereco).subscribe();
      this.cliente.enderecos.splice(0, 1);//Exclui posição do array
      console.log(idEndereco);

      //Reload no loalstorage após as alterações
      localStorage.setItem('cliente', JSON.stringify(this.cliente));

      alert("Endereço excluido com sucesso!!!");
      window.location.reload();
    }

  }


}
