import { Titulo } from '../../components/Titulo'
import { ProjetoTodoList, ProjetoCalcIMC } from '../../components/Projeto'
import { Lista } from './styles'

export const Projetos = () => (
  <section id="projects">
    <Titulo fontSize={30}>Projetos</Titulo>
    <Lista>
      <li>
        <ProjetoTodoList />
      </li>
      <li>
        <ProjetoCalcIMC />
      </li>
    </Lista>
  </section>
)
