import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'desafio-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  jogador1: string = null
  jogador2: string = null
  jogoPronto: boolean = false
  mensagemPadrao: string = "Falta realizar o cadastro dos jogadores"
  mensagemCadastro: string = this.mensagemPadrao
  rotaJogo: string = '/jogo/'


  constructor() { }

  ngOnInit(): void {
  }

  public confirmarCadastro(): void {
    if (this.jogador1 == this.jogador2) {
      this.mensagemCadastro = "Os nomes não podem ser iguais"
      setTimeout(() => this.mensagemCadastro = this.mensagemPadrao, 2000)
    } else
    if (this.jogador1 && this.jogador2) {
      this.mensagemCadastro = "Jogo pronto para o início"
      this.jogoPronto = true
      this.rotaJogo += this.jogador1 + "/" + this.jogador2
    } else {
      this.mensagemCadastro = "Você ainda não definiu os jogadores"
      setTimeout(() => this.mensagemCadastro = this.mensagemPadrao, 2000)
    }
  }
}
