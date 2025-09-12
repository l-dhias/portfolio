import { Paragrafo } from '../Paragrafo'

import { TituloProjeto, Card, LinkBotao } from './styles'

export const ProjetoTodoList = () => (
  <Card>
    <LinkBotao href="https://todo-vue-delta-umber.vercel.app/" target="_blank">
      <TituloProjeto>Lista de tarefas</TituloProjeto>
      <Paragrafo>
        Projeto de lista de tarefas desenvolvido com Vue.js, onde é possível
        adicionar, marcar como concluídas e remover tarefas. A aplicação foi
        construída com foco em simplicidade e usabilidade, explorando conceitos
        fundamentais do framework como reatividade, diretivas e componentização.
      </Paragrafo>
    </LinkBotao>
  </Card>
)

export const ProjetoCalcIMC = () => (
  <Card>
    <LinkBotao href="https://imc-react-tau.vercel.app/" target="_blank">
      <TituloProjeto>Calculadora de IMC</TituloProjeto>
      <Paragrafo>
        Calculadora de IMC desenvolvida com React, que permite inserir peso e
        altura para calcular automaticamente o Índice de Massa Corporal. A
        aplicação apresenta o resultado acompanhado da classificação de acordo
        com as faixas de saúde estabelecidas, oferecendo uma interface simples e
        intuitiva. O projeto foi construído para praticar conceitos como
        gerenciamento de estado com hooks, manipulação de eventos e
        componentização.
      </Paragrafo>
    </LinkBotao>
  </Card>
)
