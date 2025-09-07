import styled from 'styled-components'

export const ContainerSkill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 22px 32px;
  border: 2px solid transparent;
  background-color: #2b6bb01e;
  border-radius: 16px 0;
  width: 120px;
  height: 120px;

  @media (max-width: 768px) {
    padding: 22px 22px;
    width: 90px;
    height: 90px;
  }
`

export const SkillImg = styled.img`
  width: 80px;
  display: block;
`
