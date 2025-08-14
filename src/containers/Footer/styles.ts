import styled from 'styled-components'
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
} from 'react-icons/fa'

export const End = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`

export const FaGithub = styled(GithubIcon as unknown as React.FC)`
  color: #000;
  font-size: 28px;
  transition: color 0.3s ease;
  margin-right: 6px;

  &:hover {
    color: #6e5494;
  }
`

export const FaLinkedin = styled(LinkedinIcon as unknown as React.FC)`
  color: #000;
  font-size: 28px;
  transition: color 0.3s ease;
  margin-right: 6px;

  &:hover {
    color: #0077b5;
  }
`
