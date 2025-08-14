import Footer from './containers/Footer'
import Projetos from './containers/Projetos'
import Sidbar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidbar />
        <main>
          <Sobre />
          <Projetos />
        </main>
        <Footer />
      </Container>
    </>
  )
}

export default App
