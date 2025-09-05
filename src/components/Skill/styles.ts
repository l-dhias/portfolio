import styled from 'styled-components'

export const ContainerSkill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border: 2px solid transparent;
  border-radius: 16px 0;
  transition:
    background 0.3s,
    border-color 0.3s;

  &:hover {
    background-color: #2b6bb01e;
  }
`

export const SkillImg = styled.img`
  width: 140px;
`
