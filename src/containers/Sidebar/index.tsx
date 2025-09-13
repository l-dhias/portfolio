import React from 'react'

import { Titulo } from '../../components/Titulo'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

import {
  Descricao,
  Menu,
  SidebarContainer,
  ListaSocial,
  ListaNav,
  NavItem,
} from './styles'

export const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Titulo fontSize={60}> Leonardo Dias</Titulo>
      <Descricao tipo="secundario" fontSize={24}>
        Desenvolvedor Front-End
      </Descricao>
      <Descricao tipo="primario" fontSize={24}>
        Eu crio experiências digitais.
      </Descricao>
      <Menu>
        <ListaNav>
          <NavItem href="#sobre">Sobre</NavItem>
        </ListaNav>
        <ListaNav>
          <NavItem href="#skills">Habilidades</NavItem>
        </ListaNav>
        <ListaNav>
          <NavItem href="#experince">Experiência</NavItem>
        </ListaNav>
        <ListaNav>
          <NavItem href="#projects">Projetos</NavItem>
        </ListaNav>
      </Menu>
      <ListaSocial>
        <li>
          <a href="https://github.com/l-dhias" target="_blank" rel="noreferrer">
            <FaGithub size={50} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/leonardo-dias-desenvolvedor-web-front-end/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={50} />
          </a>
        </li>
      </ListaSocial>
    </SidebarContainer>
  </aside>
)
