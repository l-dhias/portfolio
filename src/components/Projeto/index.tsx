import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkBotao } from './styles'

// export const Projeto = () => (
//   <Card>
//     {/* Nome do projeto */}
//     <Title>Projeto calculadora aritmética</Title>
//     <Paragraph tipo="secundario">
//       calculadora aritmética feita com VueJs
//     </Paragraph>
//     <LinkBotao>Visualizar</LinkBotao>
//     {/* descrição do projeto */}
//   </Card>
// )
export const ProjetoIMC = () => (
  <Card>
    <Title>Projeto calculadora de IMC React</Title>
    <Paragraph tipo="secundario">Calculadora de IMC usando React</Paragraph>
    <a
      href="https://imc-react-tau.vercel.app/"
      target="_blank"
      rel="noreferrer"
    >
      <LinkBotao>Visualizar</LinkBotao>
    </a>
  </Card>
)
export const ProjetoTodoList = () => (
  <Card>
    <Title>Projeto Lista de Tarefas Vue.Js</Title>
    <Paragraph tipo="secundario">Lista de Tarefas usando o Vue.Js</Paragraph>
    <a
      href="https://todo-vue-delta-umber.vercel.app/"
      target="_blank"
      rel="noreferrer"
    >
      <LinkBotao>Visualizar</LinkBotao>
    </a>
  </Card>
)
