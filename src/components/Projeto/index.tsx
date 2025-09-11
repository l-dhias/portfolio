import { Paragrafo } from '../Paragrafo'

import { TituloProjeto, Card, LinkBotao, Ilustracao } from './styles'
import { Titulo } from '../Titulo/styles'

export const ProjetoTodoList = () => (
  <>
    <TituloProjeto>Lista de tarefas</TituloProjeto>
    <LinkBotao href="https://todo-vue-delta-umber.vercel.app/" target="_blank">
      <Card>
        <Ilustracao
          src="https://assets.dryicons.com/uploads/icon/svg/6152/93a0fe3e-abb0-4d36-978d-6e17879af2b7.svg"
          alt=""
        />
        <Paragrafo>
          Projeto de lista de tarefas desenvolvido com Vue.js, onde é possível
          adicionar, marcar como concluídas e remover tarefas. A aplicação foi
          construída com foco em simplicidade e usabilidade, explorando
          conceitos fundamentais do framework como reatividade, diretivas e
          componentização.
        </Paragrafo>
      </Card>
    </LinkBotao>
  </>
)
export const Projeto = () => (
  <LinkBotao href="">
    <Card>
      <Titulo>Calculadora de IMC</Titulo>
      <Paragrafo> colocar uma descrição</Paragrafo>
    </Card>
  </LinkBotao>
)
