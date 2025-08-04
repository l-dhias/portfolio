import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    {/* Nome do projeto */}
    <Title>Projeto calculadora aritmética</Title>
    <Paragraph tipo="secundario">
      calculadora aritmética feita com VueJs
    </Paragraph>
    <LinkBotao>Visualizar</LinkBotao>
    {/* descrição do projeto */}
  </Card>
)

export default Projeto
