import { Paragrafo } from '../Paragrafo'

import { TituloProjeto, Card, LinkBotao, Ilustracao } from './styles'
import { Titulo } from '../Titulo/styles'

export const ProjetoTodoList = () => (
  <Card>
    <Ilustracao
      src="https://thumb.ac-illust.com/7c/7caa4176599f862bdd3832454c2732ca_w.jpeg"
      alt="Prévia do projeto Lista de tarefas"
    />
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
export const Projeto1 = () => (
  <LinkBotao href="">
    <Card>
      <Titulo>Calculadora de IMC</Titulo>
      <Paragrafo> colocar uma descrição</Paragrafo>
    </Card>
  </LinkBotao>
)

export const Projeto = () => (
  <Card>
    <LinkBotao href="">
      <Titulo>Lista de tarefas</Titulo>
      <Paragrafo>
        Projeto de lista de tarefas desenvolvido com Vue.js, onde é possível
        adicionar, marcar como concluídas e remover tarefas. A aplicação foi
        construída com foco em simplicidade e usabilidade, explorando conceitos
        fundamentais do framework como reatividade, diretivas e componentização.
      </Paragrafo>
    </LinkBotao>
  </Card>
)
