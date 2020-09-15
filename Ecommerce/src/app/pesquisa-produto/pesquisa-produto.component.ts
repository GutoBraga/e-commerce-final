import { Component, OnInit } from '@angular/core';
import { ResponseProdutos } from '../categorias/shared/produto.model';
import { ResponseFabricantes } from '../categorias/shared/fabricante.model';
import { ProdutoService } from '../categorias/shared/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pesquisa-produto',
  templateUrl: './pesquisa-produto.component.html',
  styleUrls: ['./pesquisa-produto.component.css']
})
export class PesquisaProdutoComponent implements OnInit {

  id: string;
  query: any;
  idFabricante: string;

  responseProdutos: ResponseProdutos[];
  responseFabricantes: ResponseFabricantes[];

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Método criado para listar produtos no campo de pesquisa
    // this.listarProdutosPorID();

    this.listarFabricantesPorSubCategoria();
    this.listarProdutosPorNome();
  }

  queryField = new FormControl();

  listarProdutosPorID() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.produtoService.getProdutosPorId(this.id).subscribe(response => this.responseProdutos = response);
  }

  //Lista os produtos pesquisados no campo de pesquisa
  listarProdutosPorNome() {
    this.query = this.route.snapshot.paramMap.get('query');
    this.produtoService.getProdutoNome(this.query).subscribe(response => this.responseProdutos = response);
  }



  listarTodosProdutos() {
    this.produtoService.getProdutos().subscribe(response =>
      this.responseProdutos = response);
  }

  
  listarFabricantesPorSubCategoria() {
    this.query = this.route.snapshot.paramMap.get('query');
    this.produtoService.getFabricantesPorSubCategoriaPesquisa(this.query).subscribe(response => this.responseFabricantes = response);
  }



  clicked(cd: number) {
    this.router.navigateByUrl('categorias/produto', { skipLocationChange: true }).then(() => {
      this.router.navigate([`categorias/produto/${cd}`]);
    });
  }

}
