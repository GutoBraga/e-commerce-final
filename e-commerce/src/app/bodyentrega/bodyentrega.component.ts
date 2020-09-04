import { Endereco } from './../bodylogin/shared/endereco.model';
import { ClienteUpdate } from './../bodylogin/shared/cliente.model';
import { Router } from '@angular/router';
import { CadastroService } from './../cadastro/shared/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../bodylogin/shared/cliente.model';

@Component({
  selector: 'app-bodyentrega',
  templateUrl: './bodyentrega.component.html',
  styleUrls: ['./bodyentrega.component.css']
})
export class BodyentregaComponent implements OnInit {



  cliente: Cliente;
  id: string;
  endereco: Endereco;

  constructor(
    private cadastroService: CadastroService,
    private router: Router
  ) {  }


  ngOnInit(): void {  
    this.buscarIdCliente();
  }

  public buscarIdCliente() {
    this.cliente = JSON.parse(localStorage['cliente']);
    console.log(this.cliente); 
  }


  update(): void {
    this.cliente = JSON.parse(localStorage['cliente']);
    console.log(this.cliente.enderecos[0].nrCep);
    this.cadastroService.updateEndereco({ id: this.cliente.idCliente, request: this.cliente.enderecos[0] }).subscribe();
    console.log(this.cliente.idCliente);
    
    // this.router.navigate(['/pagamento']);
  }
}
