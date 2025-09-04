import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 80px;
    text-align: center;
  }
`

export const ListaNav = styled.li`
  margin-top: 50px;
  color: #94a3b8;
  cursor: pointer;

  &:hover {
    color: #fcfcfcff;
  }
`

export const ListaSocial = styled.ul`
  display: flex;
  gap: 16px;
  padding: 360px 0 0;
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
`
