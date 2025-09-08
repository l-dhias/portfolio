import styled from 'styled-components'

export const ListaSkill = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 26px;
  row-gap: 16px;

  @media (max-width: 768px) {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 8px;
    row-gap: 10px;
  }
`
