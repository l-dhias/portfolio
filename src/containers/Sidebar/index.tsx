import React from 'react'

import { Paragrafo } from '../../components/Paragrafo'
import { Titulo } from '../../components/Titulo'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

import {
  Descricao,
  Menu,
  SidebarContainer,
  ListaSocial,
  ListaNav,
} from './styles'

export const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Titulo fontSize={48}> Leonardo Dias</Titulo>
      <Paragrafo tipo="secundario" fontSize={20}>
        Engenheiro Front-End
      </Paragrafo>
      <Descricao tipo="primario">
        Eu crio experiências digitais acessíveis e perfeitas em pixels para a
        web.
      </Descricao>
      <Menu>
        <ul>
          <ListaNav>sobre</ListaNav>
          <ListaNav>Experiências</ListaNav>
          <ListaNav>Projetos</ListaNav>
        </ul>
      </Menu>
      <ListaSocial>
        <li>
          <a href="https://github.com/l-dhias" target="_blank" rel="noreferrer">
            <FaGithub size={28} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/leonardo-dias-desenvolvedor-web-front-end/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
        </li>
      </ListaSocial>
    </SidebarContainer>
  </aside>
)
