import styled from 'styled-components'
import { Titulo } from '../Titulo'

export const TituloProjeto = styled(Titulo)`
  margin-bottom: 16px;
  font-size: 24px;
  color: #2b6bb0;
`

export const Card = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const LinkBotao = styled.a`
  display: flex;
  width: 100%;
  padding: 8px 16px;
  border: 2px solid transparent;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition:
    background 0.3s,
    border-color 0.3s;

  &:hover {
    background-color: #2b6bb01e;
  }
`
export const Ilustracao = styled.img`
  max-width: 240px;
`
