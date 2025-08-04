import Title from '../../components/Title'
import { Avatar, SidebarContainer } from './styles'

const Sidbar = () => (
  <SidebarContainer>
    <Avatar>
      <img src="https://github.com/l-dhias.png" />
    </Avatar>

    <Title fontSize={25}>Leonardo Dias</Title>
    <Title fontSize={13}>Desenvolvedor Front-End</Title>
  </SidebarContainer>
)

export default Sidbar
