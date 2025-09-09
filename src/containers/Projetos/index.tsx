import { Titulo } from '../../components/Titulo'
import { ProjetoTodoList, Projeto } from '../../components/Projeto'
import { Lista } from './styles'

export const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <ProjetoTodoList />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
    </Lista>
  </section>
)
