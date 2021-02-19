# digitalinnovationone_camila_desafio
Desafio proposto na Palestra da Aceleração Global Dev #2 Avanade – Digital Innovation One Pela especialista: Camila Ferreira

# Desafio:
1) Crie uma aplicação Angular (Não esqueça que todo código precisa estar no GitHub)
2) Crie no mínimo 3 componentes que deverão estar interagindo na mesma página (Não esqueça das rotas)
3) Escolha no mínimo 4 componentes do Angular Material e incorpore eles em sua aplicação
4) Crie em uma das páginas uma interação através da Interpolação e/ou utilizando Property Binding
5) Crie uma explicação sobre o que foi feito, esta explicação será inserida na plataforma junto com o link para o código no GitHub
6) Você poderá criar um vídeo demonstrativo da aplicação construída, e publicá-lo no YouTube, passando o link de acesso na plataforma. 
Este passo 6, não é obrigatório, mas entrará como um diferencial.


# Descrição do projeto realizado:

**Resumo:**

**Uma página simulando um jogo que gera um número aleatório onde o jogador tem que adivinhar**

# •	Tela inicial de cadastro:
!["imagem do jogo"](/src/assets/img/cadastro.JPG)
     solicita o cadastro de 2 jogadores   
     Um botão para iniciar o jogo: link para página do jogo passando os nomes dos jogadores   
# •	Tela do jogo:
!["imagem do jogo"](/src/assets/img/jogo.JPG)
     Gera um número aleatório entre 1 e 3   
     Solicita o palpite do jogador (alternando entre os dois jogadores)   
     Compara o número gerado e exibe a informação de acerto ou erro   
     Exibe o número de acertos e erros dos dois jogadores   
     Possui um menu para Tela de cadastro e Tela com a descrição do jogo   
# •	Tela de descrição:
     o	Informações sobre o jogo e um link para tela de cadastro.
     
# Implementação:
     • Criação do projeto com rotas:
          -> ng new desafio –routing –prefix=desafio
          -> Foi adicionado o @angular/material
               -> ng add @angular/material
          -> Foi instalado o bootstrap
               -> npm install bootstrap
                    -> incluída a importação do css do bootstrap no arquivo:  angular.json
     • Criação dos componentes:
          • cadastro: 
               -> ng g c jogo/cadasto
               -> Adicionado o componentes do @angular/material:
                    -> MatInputModulo -> input para entrada dos nomes dos jogadores
               -> Adicionado no html um modelo de card no bootstrap
               -> Data Binding:
                    -> Two-Way -> armazena os nomes dos 2 jogadores digitados nas variáveis (jogador1 e jogador2)
                    -> Property Binding -> inclui o nome dos jogadores na tag href (link para tela do
                       jogo passando 2 parâmetros – nomes dos jogadores)
               -> Diretivas:
                    -> *ngIf -> usa a variável jogoPronto para mostrar/ocultar botões de confirmação de cadastro e iniciar jogo
               -> Event Binding:
                    -> evento click -> chama o método: confirmarCadastro()
          • números-aleatórios:
               -> ng g c jogo/números-aleatorio
               -> Adicionado o componente do @angular/material:
                    -> MatProgressBarModule -> exibe uma barra de progresso simulando a geração do número aleatório
          • resultado:
               -> ng g c jogo/resultado
               -> Adicionado o componente do @angular/material:
                    -> MatGridListModule -> exibe um grid com os nomes dos jogadores e número de acertos e erros
               -> Adicionado um Spinner do bootstrap para indicar de qual jogador é a vez de jogar
                    -> Diretivas:
                         -> *ngIf -> testa qual jogador está jogando para exibir o spinner 
               -> @Input()
                    -> Adicionado para receber os dados dos jogadores vindos da tela do jogo (jogo.component)
               -> Data Binding:
                    -> Interpolação  -> para exibir dados dos jogadores na tela
          • descrição:
               -> ng g c jogo/descrição
          • jogo:
               -> ng c jogo/jogo
               -> Lógica:
                    •	Recebe os parâmetros da rota cadastro -> (ngOnInit())
                    •	Inicia jogo solicitando entrada: palpite do 1º. jogador
                    •	Gera número aleatório
                    •	Metódo confirmarNumero() :  compara número gerado com palpite do jogador e registra
                      as informações de acertos e erros -> exibindo resultado no template
                    •	Metódo trocaJogador(): reseta variáveis e alterna jogadores
               -> Adicionado o componente do @angular/material:
                    -> MatMenuModule -> exibe um Menu com links para tela de cadastro e descrição
               -> Adicionado no html um modelo de grid do bootstrap
               -> Data Binding:
                    -> Interpolação  -> para enviar dados para o template
                    -> Two-Way -> para receber e enviar dados do template
               -> Diretivas:
                    -> *ngIf -> para ocultar/exibir tags html de acordo com o valor da variável testada
               -> Event Binding:
                    -> evento click -> para chamar métodos (confirmarNumero() e trocaJogador())


