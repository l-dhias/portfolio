import styled from 'styled-components'

export const Card = styled.div`
  padding: 16px;
`

export const LinkBotao = styled.a`
  display: inline-block;
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
