import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  constructor() { }

  quant:number = 1;
 

  somar() {
    this.quant+=1;
  }

  subtrair() {
    if(this.quant <2)
    this.quant ==1;
    else
    this.quant-=1;
 
  }




//    process(quant) {
//     var value = parseInt(document.getElementById("quant"));
//     value += quant;
//     if (value < 1) {
//         document.getElementById("quant").value = 1;
//     } else {
//         document.getElementById("quant").value = value;
//     }
// }

 
  ngOnInit(): void {
  }

}
