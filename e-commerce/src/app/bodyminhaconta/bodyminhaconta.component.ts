import { Component, OnInit } from '@angular/core';
import * as Inputmask from "inputmask";

@Component({
  selector: 'app-bodyminhaconta',
  templateUrl: './bodyminhaconta.component.html',
  styleUrls: ['./bodyminhaconta.component.css']
})
export class BodyminhacontaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public maskCep = [/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,'-',/[0-9]/,/[0-9]/,/[0-9]/]
  public maskTel1 = ['(','0', /[1-9]/, /\d/,')', ' ', '9',/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public maskTel = ['(','0', /[1-9]/, /\d/,')',/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
}
