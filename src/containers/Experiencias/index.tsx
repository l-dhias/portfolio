import { Titulo } from '../../components/Titulo'
import { Experiencia } from '../../components/Experiencia'

export const Experiencias = () => (
  <section>
    <Titulo fontSize={16}>Experiência</Titulo>
    <ul>
      <li>
        <Experiencia />
      </li>
      <li>
        <Experiencia />
      </li>
      <li>
        <Experiencia />
      </li>
    </ul>
  </section>
)
