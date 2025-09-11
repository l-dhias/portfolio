import styled from 'styled-components'
import { Titulo } from '../Titulo'

export const TituloProjeto = styled(Titulo)`
  text-align: center;
  margin-bottom: 16px;
`

export const Card = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 10px;
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
    flex-direction: column;
    padding: 12px;
    width: 80%;
    gap: 12px;
  }
`

export const LinkBotao = styled.a`
  display: inline-block;
  padding: 8px 16px;
  border: 2px solid transparent;
  border-radius: 8px;
  text-decoration: none;
`
export const Ilustracao = styled.img`
  max-width: 120px;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 80%; // ocupa 80% do card
    max-width: 200px; // limita em telas maiores
    height: auto;
  }
`
