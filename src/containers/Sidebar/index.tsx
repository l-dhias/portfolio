import Title from '../../components/Title'
import { SidebarContainer, PerfilGit, FaGithub } from './styles'
import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'

const Sidebar = () => (
  <SidebarContainer>
    <Avatar />
    <Title fontSize={25}>Leonardo Dias</Title>
    <PerfilGit href="https://github.com/l-dhias" target="_blank">
      <Paragraph tipo="secundario" fontSize={16}>
        <FaGithub />
        GitHub l-dhias
      </Paragraph>
    </PerfilGit>
    <Title fontSize={13}>Desenvolvedor Front-End</Title>
  </SidebarContainer>
)

export default Sidebar
