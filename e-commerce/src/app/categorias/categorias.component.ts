import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './shared/produto.service';
import { ResponseProdutos } from './shared/produto.model';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  id: string;

  responseProdutos: ResponseProdutos[];

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listarProdutosPorID();
  }
  listarProdutosPorID() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.produtoService.getProdutosPorId(this.id).subscribe(response => this.responseProdutos = response);
  }

  listarTodosProdutos() {
    this.produtoService.getProdutos().subscribe(response => {
      this.responseProdutos = response;
    });
  }

  clicked(cd: number) {
    this.router.navigateByUrl('categorias/produto', { skipLocationChange: true }).then(() => {
      this.router.navigate([`categorias/produto/${cd}`]);
    });
  }

}
