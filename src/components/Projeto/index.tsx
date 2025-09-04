import { Paragrafo } from '../Paragrafo'

import { Card, LinkBotao } from './styles'
import { Titulo } from '../Titulo/styles'

export const Projeto = () => (
  <LinkBotao href="">
    <Card>
      <Titulo>Calculadora de IMC</Titulo>
      <Paragrafo> colocar uma descrição</Paragrafo>
    </Card>
  </LinkBotao>
)
