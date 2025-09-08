import styled from 'styled-components'

export const ListaSkill = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 26px;
  row-gap: 16px;
  margin: 0 auto;
  > li {
    display: flex; /* transforma cada li em flex */
    justify-content: center; /* centraliza horizontalmente */
    align-items: center; /* centraliza verticalmente */
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 8px;
    row-gap: 10px;
  }
  @media (max-width: 480px) {
    width: 60%;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    column-gap: 6px;
    row-gap: 8px;
    > li {
      justify-content: center;
    }
  }
`
