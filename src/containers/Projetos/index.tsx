import Title from '../../components/Title'
import { ProjetoIMC, ProjetoTodoList } from '../../components/Projeto'
import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <Lista>
      <li>
        <ProjetoIMC></ProjetoIMC>
      </li>
      <li>
        <ProjetoTodoList></ProjetoTodoList>
      </li>
      {/* <li>
        <Projeto></Projeto>
      </li>
      <li>
        <Projeto></Projeto>
      </li>
      <li>
        <Projeto></Projeto>
      </li> */}
    </Lista>
  </section>
)
export default Projetos

//Para adicionar mais projetos só copiar a tag 'li'
