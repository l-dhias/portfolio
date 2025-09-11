import { Experiencias } from './containers/Experiencias'
import { Projetos } from './containers/Projetos'
import { Sidebar } from './containers/Sidebar'
import { Skills } from './containers/Skills'
import { Sobre } from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'

import { Cursor } from './components/Cursor'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Cursor />
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
