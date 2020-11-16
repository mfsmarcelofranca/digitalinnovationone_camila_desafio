import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'desafio-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css'],
  inputs: ['jogador1']
})
export class JogoComponent implements OnInit {

  numeroDigitado: number = null
  numeroAleatorio: number = Math.floor(Math.random() * 3 + 1)
  numeroResultado: number = null
  btnNumeroDigitado: string = "btn btn-light"
  btnResultado: string = "btn btn-light"
  btnAcertou: string = "btn btn-success"
  btnErrou: string = "btn btn-errou"
  jogador1: string = null
  jogador2: string = null
  proximoJogador: boolean = false
  jogador: string = null
  acertou: boolean = false
  errou: boolean = false
  acertosJogador1: number = 0
  acertosJogador2: number = 0
  errosJogador1: number = 0
  errosJogador2: number = 0

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {
      if (parametros['jogador1']){
        this.jogador1 = parametros["jogador1"]
        this.jogador2 = parametros["jogador2"]
        this.jogador = this.jogador1
      }
    })
  }

  confirmarNumero(): void {
    this.btnNumeroDigitado = "btn btn-light"
    this.btnResultado = "btn btn-light"
    if (this.numeroDigitado == this.numeroAleatorio) {
      this.btnNumeroDigitado = this.btnAcertou
      this.btnResultado = this.btnAcertou
      this.acertou = true
      this.registraAcertos()
    } else {
      this.btnNumeroDigitado = this.btnErrou
      this.btnResultado = this.btnErrou
      this.errou = true
      this.registraErros()
    }
    this.proximoJogador = true
    this.numeroResultado = this.numeroAleatorio
  }

  trocaJogador(): void {
    if (this.jogador == this.jogador1) {
      this.jogador = this.jogador2
    } else {
      this.jogador = this.jogador1
    }
    this.proximoJogador = false
    this.numeroDigitado = null
    this.errou = false
    this.acertou = false
    this.numeroResultado = null
    this.btnNumeroDigitado = "btn btn-light"
    this.btnResultado = "btn btn-light"
    this.numeroAleatorio = Math.floor(Math.random() * 3 + 1)
  }

  registraAcertos(): void {
    if (this.jogador == this.jogador1) {
      this.acertosJogador1++
    } else {
      this.acertosJogador2++
    }
  }

  registraErros(): void {
    if (this.jogador == this.jogador1) {
      this.errosJogador1++
    } else {
      this.errosJogador2++
    }
  }
}
