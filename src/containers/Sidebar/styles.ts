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
  position: fixed;
  top: 120px;
  left: 0;
  width: 560px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* joga o social pro final */
  align-items: flex-start;
  padding: 0 16px;
  margin-left: 250px;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    padding: 16px 0;
    margin: 0;
    text-align: center;
    align-items: center;
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
  font-size: 26px;
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
  margin-top: auto;

  li a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    transition: color 0.3s;
    margin-bottom: 100px;

    &:hover {
      color: #fcfcfcff;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 24px;
  }
`
