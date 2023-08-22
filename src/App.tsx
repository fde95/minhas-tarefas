import { Provider } from 'react-redux'
import Footer from './components/Footer'
import BarraLateral from './containers/BarraLateral'
import ListaTarefas from './containers/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaTarefas />
        <Footer />
      </Container>
    </Provider>
  )
}

export default App
