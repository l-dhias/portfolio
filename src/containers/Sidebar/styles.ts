import styled from 'styled-components'
import { FaGithub as GithubIcon } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  text-align: center;
`

export const PerfilGit = styled.a`
  text-decoration: none;
  margin-bottom: 2px;
`

export const FaGithub = styled(GithubIcon as unknown as React.FC)`
  color: #000;
  font-size: 18px;
  transition: color 0.3s ease;
  margin-right: 6px;

  &:hover {
    color: #6e5494;
  }
`
