import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
  display:block;
    text aling: center;
  }
`

export const Menu = styled.nav`
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 120px;
  left: 0;

  @media (max-width: 768px) {
    padding-top: 80px;
    margin-bottom: 80px;
    text-align: center;
  }
`

export const ListaNav = styled.li`
  margin-top: 30px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    padding: 10px 10px;
    width: 90px;
    height: 90px;
  }
`
export const NavItem = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: #94a3b8;
  cursor: pointer;
  scroll-behavior: smooth;

  &:hover {
    color: #fcfcfcff;
  }
`

export const ListaSocial = styled.ul`
  display: flex;
  gap: 16px;
  padding: 50px 0 0;
  margin: 16px 0;
  list-style: none;

  li a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    transition: color 0.3s;

    &:hover {
      color: #fcfcfcff;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`
