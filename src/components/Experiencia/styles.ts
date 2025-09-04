import styled from 'styled-components'

export const CardEx = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
`
export const LinkBotaoEx = styled.a`
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

export const ListaEx = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 0;
  color: #4cc3d8ff;
`
export const ListaLi = styled.li`
  padding: 4px 10px;
  border-radius: 15px;
  border: 2px solid transparent;
  background-color: #4cc3d82d;
`
