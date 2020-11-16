import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';

import { CadastroComponent } from './jogo/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { JogoComponent } from './jogo/jogo/jogo.component';
import { ResultadoComponent } from './jogo/resultado/resultado.component';
import { NumerosAleatoriosComponent } from './jogo/numeros-aleatorios/numeros-aleatorios.component';
import { DescricaoComponent } from './jogo/descricao/descricao.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    JogoComponent,
    ResultadoComponent,
    NumerosAleatoriosComponent,
    DescricaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
