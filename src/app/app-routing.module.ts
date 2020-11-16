import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './jogo/cadastro/cadastro.component';
import { DescricaoComponent } from './jogo/descricao/descricao.component';
import { JogoComponent } from './jogo/jogo/jogo.component';
import { ResultadoComponent } from './jogo/resultado/resultado.component';


const routes: Routes = [
  {
    path: '',
    component: CadastroComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'jogo/:jogador1/:jogador2',
    component: JogoComponent
  }
  ,{
    path: 'descricao',
    component: DescricaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
