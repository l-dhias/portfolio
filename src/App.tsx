import Projetos from './containers/Projetos'
import Sidbar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGolbal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGolbal />
      <Container>
        <Sidbar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
