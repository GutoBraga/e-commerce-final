import { ResponseFabricantes } from './shared/fabricante.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './shared/produto.service';
import { ResponseProdutos } from './shared/produto.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

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
    this.listarProdutosPorID();
    this.listarFabricantesPorSubCategoria();
    // this.listarProdutosPorNome();
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
    this.idFabricante = this.route.snapshot.paramMap.get('id');
    this.produtoService.getFabricantesPorSubCategoria(this.idFabricante).subscribe(response => this.responseFabricantes = response);
  }

  clicked(cd: number) {
    this.router.navigateByUrl('categorias/produto', { skipLocationChange: true }).then(() => {
      this.router.navigate([`categorias/produto/${cd}`]);
    });
  }

}
