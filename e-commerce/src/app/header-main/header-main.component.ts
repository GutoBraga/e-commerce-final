import { CestaService } from './../cesta/shared/cesta.service';
import { Component, OnInit } from '@angular/core';

 

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {

  constructor(
    private cestaService: CestaService
    ) { }

  

  ngOnInit(): void {
  }

  calculaCesta() {
    return this.cestaService.calculaCesta();
  }
  contaCesta(){
    return this.cestaService.contaCesta();
  }

}
