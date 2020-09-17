import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-categoria',
  templateUrl: './menu-categoria.component.html',
  styleUrls: ['./menu-categoria.component.css']
})
export class MenuCategoriaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  link(id: number) {
    this.router.navigateByUrl('categorias', { skipLocationChange: true }).then(() => {
      this.router.navigate([`categorias/${id}`]);
    });
  }
  
}
