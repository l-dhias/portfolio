import styled from 'styled-components'

export const ListaSkill = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 36px;
  row-gap: 36px;

  @media (max-width: 768px) {
    width: 120px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
  }
`
