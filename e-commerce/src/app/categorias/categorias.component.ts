import { Component, OnInit } from '@angular/core';
import { Produto } from './categorias.model'
import { Categoria } from './categorias.model'

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clicked(): void{
    console.log("teste")
  }

  produtos: Produto[] = [
    {
      cd_produto: 300,
      id_status_produto: 1,
      id_categoria: 1,
      id_tipo_produto: 1,
      nm_fantasia: "CREME DENTAL SENSODYNE REPAIR & PROTECT",
      nm_fabricante: "Buscopan",
      vl_unidade: 13.59,
      ds_peso: 1,
      id_imagem: "https://i.imgur.com/uYGW8dc.jpg",
      ds_produto: "ok"
    }
  ]

  categorias: Categoria[] =[
    {
      id_categoria: 2,
      ds_categoria: "Medicamentos"
    }
  ]

}
