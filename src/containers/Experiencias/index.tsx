import { Experiencia, ExperienciaStyled } from '../../components/Experiencia'
import { Titulo } from '../../components/Titulo'
import { SectionExpe } from './styles'

export const Experiencias = () => (
  <SectionExpe>
    <Titulo fontSize={16}>Experiência</Titulo>
    <ul>
      <li>
        <Experiencia />
      </li>
      <li>
        <ExperienciaStyled />
      </li>
      {/* <li>
        <Experiencia />
      </li> */}
    </ul>
  </SectionExpe>
)
