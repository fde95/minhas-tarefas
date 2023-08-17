import Footer from './components/Footer'
import BarraLateral from './containers/BarraLateral'
import ListaTarefas from './containers/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaTarefas />
        <Footer />
      </Container>
    </>
  )
}

export default App
