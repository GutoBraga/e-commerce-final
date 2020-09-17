import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodyidentificacao',
  templateUrl: './bodyidentificacao.component.html',
  styleUrls: ['./bodyidentificacao.component.css']
})
export class BodyidentificacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public maskTel = ['(','0', /[1-9]/, /\d/,')', ' ', '9',/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public maskEmail = [/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i]
}
