import styled from 'styled-components'
import { Titulo } from '../Titulo'

export const TituloProjeto = styled(Titulo)`
  text-align: center;
  margin-bottom: 16px;
`

export const Card = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column; /* um embaixo do outro */
  margin-bottom: 80px;
  align-items: center;
  justify-content: center;
  gap: 32px; /* espaço entre os cards */
  margin: 0 auto; /* centraliza o container */
  border: 2px solid transparent;
  border-radius: 8px;
  transition:
    background 0.3s,
    border-color 0.3s;
  transition: transform 0.3s ease;

  &:hover {
    background-color: #2b6bb01e;
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    display: flex;
    margin-bottom: 80px;
    flex-direction: column;
    padding: 12px;
    width: 80%;
    gap: 12px;
  }
`

export const LinkBotao = styled.a`
  display: inline-block;
  padding: 8px 10px;
  border: 2px solid transparent;
  border-radius: 8px;
  text-decoration: none;
`
