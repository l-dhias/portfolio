import styled from 'styled-components'

export const Lista = styled.ul`
  display: block;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    display: block;
    grid-template-columns: 1fr;
    column-gap: 0;
  }
`
