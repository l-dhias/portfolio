import { Paragrafo } from '../Paragrafo'

import { TituloProjeto, Card, LinkBotao, Ilustracao } from './styles'
import { Titulo } from '../Titulo/styles'

export const ProjetoTodoList = () => (
  <>
    <TituloProjeto>Lista de tarefas</TituloProjeto>
    <LinkBotao href="https://todo-vue-delta-umber.vercel.app/" target="_blank">
      <Card>
        <Ilustracao
          src="https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-0528-61fb-ae16-49531fc64531/raw?se=2025-09-09T13%3A48%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=5d7802f6-d7ba-5cc2-8449-cd7f7a8b3427&skoid=77636ecc-ad8d-44df-baa7-163b524a0261&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-08T17%3A30%3A02Z&ske=2025-09-09T17%3A30%3A02Z&sks=b&skv=2024-08-04&sig=0DrO9wVRT9J7R0HppeT%2Bi4vaacNZab2/wGGma%2B9TsBk%3D"
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
