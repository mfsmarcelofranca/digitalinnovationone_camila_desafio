import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'desafio-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  @Input() jogador1: string
  @Input() jogador2: string
  @Input() acertosJogador1: number
  @Input() acertosJogador2: number
  @Input() errosJogador1: number
  @Input() errosJogador2: number
  @Input() jogador: string

  constructor() { }

  ngOnInit(): void {
  }

}
