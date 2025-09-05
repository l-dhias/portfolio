import { Experiencias } from './containers/Experiencias'
import { Projetos } from './containers/Projetos'
import { Sidebar } from './containers/Sidebar'
import { Skills } from './containers/Skills'
import { Sobre } from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Skills />
          <Experiencias />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
