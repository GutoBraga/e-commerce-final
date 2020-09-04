import { Cadastro } from './shared/cadastro.model';
import { CadastroService } from './shared/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nrCpf: string;

  request: Cadastro = {
    nmCliente: '',
    nrCpf: '',
    dsEmail: '',
    pwCliente: ''
  }

  constructor(
    private cadastroService: CadastroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  // registrar(): void {
  //   this.cadastroService.postCadastro(this.request).subscribe();
  //   localStorage['cadastro']=JSON.stringify(this.request);
  //   alert("Cliente registrado com sucesso!")
  // }


  //Método para cadastrar novo cliente e salvar no localstorage
  registrar() {
    if (this.request.nrCpf == null) {
      alert("erro!")
    } else {
      this.cadastroService.postCadastro(this.request).subscribe(
        response => {
          this.request = response; console.log(this.request);
          let cadastro = localStorage['cadastro'] = JSON.stringify(this.request);
          alert("cadastro realizado");
        });
    }
  }

  //método para atualizar dados do cliente
  update(): void {
    this.cadastroService.updateCadastro(this.nrCpf, this.request).subscribe();
    this.router.navigate(['/cadastro']);
  }

  ngOnInit(): void {
    this.registrar();
  }
}
