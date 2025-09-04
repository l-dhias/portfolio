import { Titulo } from '../../components/Titulo'
import { Paragrafo } from '../../components/Paragrafo'

import { CardEx, LinkBotaoEx, ListaEx, ListaLi } from './styles'

export const Experiencia = () => (
  <CardEx>
    <LinkBotaoEx href="">
      <Titulo fontSize={12}>00/00/00 data fim projeto</Titulo>

      <Titulo fontSize={16}> Experiência</Titulo>
      <Paragrafo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ad
        molestias fugiat reiciendis iure sunt in. Omnis architecto fugit
        distinctio. Ab eius assumenda tempore voluptatem autem debitis,
        explicabo aliquam rem?
      </Paragrafo>

      <ListaEx>
        <ListaLi>typeScript</ListaLi>
        <ListaLi>javaScript</ListaLi>
        <ListaLi>html</ListaLi>
        <ListaLi>typeScript</ListaLi>
        <ListaLi>javaScript</ListaLi>
        <ListaLi>html</ListaLi>
        <ListaLi>typeScript</ListaLi>
        <ListaLi>javaScript</ListaLi>
        <ListaLi>html</ListaLi>
      </ListaEx>
    </LinkBotaoEx>
  </CardEx>
)
