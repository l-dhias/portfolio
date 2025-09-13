import { Titulo } from '../../components/Titulo'
import { Paragrafo } from '../../components/Paragrafo'

import { CardEx, LinkBotaoEx, ListaEx, ListaLi } from './styles'

export const Experiencia = () => (
  <CardEx>
    <LinkBotaoEx href="https://github.com/l-dhias/ebac_sports" target="_blank">
      <Titulo fontSize={18}>08/025 __Fim do Projeto</Titulo>

      <Titulo fontSize={24}> Ebac_sport</Titulo>
      <Paragrafo fontSize={18}>
        Desenvolvi uma aplicação utilizando o Redux Toolkit para garantir uma
        gestão de estado simples e eficiente. O projeto foi estruturado com a
        criação de um slice dedicado ao carrinho, responsável por organizar os
        itens adicionados pelos usuários. Para integração com a API, utilizei o
        Redux Toolkit Query, que facilitou o consumo de dados e trouxe mais
        performance ao lidar com cache e requisições assíncronas.
      </Paragrafo>

      <ListaEx>
        <ListaLi>html</ListaLi>
        <ListaLi>StyledComponents</ListaLi>
        <ListaLi>typeScript</ListaLi>
        <ListaLi>Redux Toolkit</ListaLi>
        <ListaLi>React Hooks</ListaLi>
        <ListaLi>Node.js</ListaLi>
        <ListaLi>ESLint</ListaLi>
        <ListaLi>React</ListaLi>
        <ListaLi>GitHub</ListaLi>
        <ListaLi>Git</ListaLi>
      </ListaEx>
    </LinkBotaoEx>
  </CardEx>
)

export const ExperienciaStyled = () => (
  <CardEx>
    <LinkBotaoEx
      href="https://github.com/l-dhias/ebac_games_redux"
      target="_blank"
    >
      <Titulo fontSize={18}>09/025 __Fim do Projeto</Titulo>

      <Titulo fontSize={24}> Ebac_games_redux</Titulo>
      <Paragrafo fontSize={18}>
        No projeto Ebac Games Redux, fui responsável pela implementação do
        Styled Components, realizando a migração da estilização em CSS
        tradicional para a abordagem em componentes estilizados. Essa mudança
        trouxe mais organização, reaproveitamento de estilos e maior integração
        entre a lógica dos componentes e o design da aplicação.
      </Paragrafo>

      <ListaEx>
        <ListaLi>html</ListaLi>
        <ListaLi>StyledComponents</ListaLi>
        <ListaLi>typeScript</ListaLi>
        <ListaLi>Redux Toolkit</ListaLi>
        <ListaLi>Node.js</ListaLi>
        <ListaLi>ESLint</ListaLi>
        <ListaLi>React</ListaLi>
        <ListaLi>GitHub</ListaLi>
        <ListaLi>Git</ListaLi>
      </ListaEx>
    </LinkBotaoEx>
  </CardEx>
)
